const User = require("../modals/userModal");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");
const sendEmail = require("../utils/sendEmail");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");
const { validate } = require("../modals/productModal");

/*************
CREATE New User
**************/

exports.registerUser = catchAsyncErrors(async(req,res,next)=>{
    
    const {userName,userEmail,userPassword} = req.body;

    // Validation

    if(!userName || !userEmail || !userPassword ){
        return next(new ErrorHander("Please enter the required fields",400));
    }

    if(userPassword.length < 6){
        return next(new ErrorHander("Password must be up to 6 characters",400));
    }

    const userExists = await User.findOne({userEmail});
    if(userExists){
        return next(new ErrorHander("Email been already used try with different email or login",400));
    }
    
    // Creting A user 
    const user = await User.create({
        userName,
        userEmail,
        userPassword,
    });
    sendToken(user, 201, res);
});


/*************
Login User
**************/

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { userEmail, userPassword } = req.body;
  
    // checking if user has given password and email both
  
    if (!userEmail || !userPassword) {
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ userEmail }).select("+userPassword");
  
    if (!user) {
      return next(new ErrorHander("Invalid email or password", 401));
    }

    if (user.status === "pending") {
      return next(new ErrorHander("User account is not approved . Please activate your account.", 401));
    }
  
    const isPasswordMatched = await user.comparePassword(userPassword);
  
    if (!isPasswordMatched) {
      return next(new ErrorHander("Invalid email or password", 401));
    }
    sendToken(user, 200, res);
  });


/*************
Logout User
**************/

exports.logoutUser = catchAsyncErrors(async (req, res, next) => {

  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  
  res.status(200).json({
    success: true,
    message: "Logged Out",
  });

});

/**********************
Forgot Password - if admin
**********************/

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  
  const { userName, userEmail } = req.body;

  if (!userName || !userEmail) {
    return next(new ErrorHander("Please Enter Username & Email", 400));
  }

  const user = await User.findOne({ userEmail, userName });

  if (!user) {
    return next(new ErrorHander("Invalid Username or Email", 401));
  }
  
  // Generating a Password Reset Token

  const resetToken = user.getResetPasswordToken();

  await user.save({validateBeforeSave: false});

  const resetPasswordUrl = `localhost:5173/resetpassword/${resetToken}`;

  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;

  try {
    await sendEmail({
      email: user.userEmail,
      subject: `RAC Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.userEmail} successfully`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
  }
});

/**************
Reset Password 
**************/

exports.resetPassword = catchAsyncErrors(async (req, res, next) => {

  // creating token hash
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user) {
    return next(
      new ErrorHander(
        "Reset Password Token is invalid or has been expired",
        400
      )
    );
  }

  if (req.body.password !== req.body.confirmPassword) {
    return next(new ErrorHander("Password does not password", 400));
  }

  user.userPassword = req.body.password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  sendToken(user, 200, res);

});

/**************
Get user details 
**************/

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.find({ status: "accepted" });

  res.status(200).json({
    success: true,
    user,
  });
});

/**************
Get user Requests 
**************/
exports.getUserRequests = catchAsyncErrors(async (req, res, next) => {
  const user = await User.find({ status: "pending" });

  res.status(200).json({
    success: true,
    user,
  });
});


/**************
Get rejected users 
**************/
exports.getrejectedUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find({ status: "rejected" });

  res.status(200).json({
    success: true,
    users,
  });
});


/**************
Approve user Requests 
**************/
exports.approveUserRequests = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id;

  // Update the user status to "accepted"
  const updatedUser = await User.updateOne({ _id: userId }, { $set: { status: "accepted" } });

  if (updatedUser.nModified === 0) {
    return next(new ErrorHander("User not found or status not updated", 404));
  }else{
    try {

      // Retrieve the updated user details
      const user = await User.findById(userId);

      const message = `Dear ${user.userName}, \n\nWe are pleased to inform you that your registration request for the RAC Inventory Management System has been successfully approved!\n\nBest regards, \nThe RAC Team`;


      await sendEmail({
        email: user.userEmail,
        subject: `Access Granted: Your RAC Registration Request Approved`,
        message,
      });
  
      res.status(200).json({
        success: true,
        user,
      });

    } catch (error) {
      return next(new ErrorHander(error.message, 500));
    }
  }
});


/**************
Reject user Requests 
**************/
exports.rejectUserRequests = catchAsyncErrors(async (req, res, next) => {
  const userId = req.params.id;

  // Update the user status to "rejected"
  const updatedUser = await User.updateOne({ _id: userId }, { $set: { status: "rejected" } });

  if (updatedUser.nModified === 0) {
    return next(new ErrorHander("User not found or status not updated", 404));
  }else{
    try {

      // Retrieve the updated user details
      const user = await User.findById(userId);

      const message = `Dear ${user.userName}, \n\nWe regret to inform you that your registration request for the RAC Inventory Management System has been rejected.\n\nBest regards, \nThe RAC Team`;



      await sendEmail({
        email: user.userEmail,
        subject: `Access Rejected: Your RAC Registration Request is Rejected`,
        message,
      });
  
      res.status(200).json({
        success: true,
        user,
      });

    } catch (error) {
      return next(new ErrorHander(error.message, 500));
    }
  }
});


/******************
Update user details 
*******************/

exports.updateUserDetails = catchAsyncErrors(async (req, res, next) => {

  let user =await User.findById({_id:req.params.id});

    if(!user){
        return next(new ErrorHander("User not found",404));
    };
  
    user = await user.findOneAndUpdate({_id:req.params.id}, req.body,{
      new:true,
      runValidators:true, 
      useFindAndModify:false
  });

  res.status(200).json({
    success:true,
    user,
   });
});

/******************
Delete user details 
*******************/

exports.deleteUser = catchAsyncErrors(async (req, res, next) => {
  console.log(req.params.id);
  const user = await User.findById({_id:req.params.id});

    if(!user){
        return next(new ErrorHander("User not found", 404))
    }

    await user.deleteOne();

    res.status(200).json({
        success:true,
        message:"User Deleted Successfully",
    });
});

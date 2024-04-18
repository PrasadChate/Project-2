const express = require("express");
const { isAuthenticatedUser,authorizeRoles } = require("../middleWare/auth");
const {registerUser,loginUser,logoutUser,forgotPassword, resetPassword, getUserDetails, updateUserDetails, deleteUser, getUserRequests, approveUserRequests, rejectUserRequests, getrejectedUsers } = require("../controllers/userController");
const router = express.Router();

// Register User 
router.route("/user/register").post(registerUser);

// Login User
router.route("/user/login").post(loginUser);

// Logout User
router.route("/user/logout").get(logoutUser);

// Forgot Password
router.route("/user/forgotpassword").post(forgotPassword);

// Reset password
router.route("/user/resetpassword/:token").put(resetPassword);

// Get users details
router.route("/user/getusers").get(getUserDetails);

// Get users requests
router.route("/user/getuserrequests").get(getUserRequests);

// Get rejected users 
router.route("/user/getrejected").get(getrejectedUsers);

// Approve users request
router.route("/user/approve/:id").put(approveUserRequests);

// Reject users request
router.route("/user/reject/:id").put(rejectUserRequests);

// Update user details
router.route("/user/updateuser/:id").put(updateUserDetails);

// Delete user
router.route("/user/deleteuser/:id").delete(deleteUser);

module.exports = router;

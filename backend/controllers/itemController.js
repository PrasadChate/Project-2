const Item = require("../modals/itemModal");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleWare/catchAsyncErrors");

exports.createitem = catchAsyncErrors(async (req, res, next) => {

  const { partNumber, itemName, underCategory, entryMonth, entryDate, productExpiryDate, numOfProducts, isTaxApplicable, tax, cgst, sgst } = req.body;
   
  console.log(req.body)

  if (!partNumber || !itemName || !underCategory || !entryMonth || !entryDate || !productExpiryDate || !numOfProducts) {
      return next(new ErrorHandler("Please enter all the required fields", 400));
  }

  result = await Item.create(req.body)

  if (!result) {
    return next(new ErrorHandler("Failed to create item", 500));
  }

  res.status(200).json({
    success: true,
    message: "Item created successfully"
  });

});

exports.getitems = catchAsyncErrors( async (req, res, next)=>{

  const data = await Item.find({});

  if(!data){
    return next(new ErrorHandler("Bad Request ", 400));
  }

  res.status(200).json({
    success: true,
    data
  });
  
});


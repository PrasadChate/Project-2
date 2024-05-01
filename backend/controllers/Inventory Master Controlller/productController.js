const catchAsyncErrors = require("../../middleWare/catchAsyncErrors");
const Product = require('../../modals/Inventory Masters Modal/productModal');
const ErrorHandler = require("../../utils/errorhander");

//CREATE PRODUCT
exports.createProduct = catchAsyncErrors(async(req,res,next)=>{
    const product =await Product.create(req.body);

    res.status(200).json({
        success:true,
        product,
    })
});


//GET ALL Products
exports.getAllProducts = catchAsyncErrors(async(req, res, next)=>{
    const allProductDetails = await Product.find({});

    if(!allProductDetails){
        return next(new ErrorHandler("Error Fetching Companies", 404));
    }
    res.status(200).json({
        success:true,
        allProductDetails,
    })
})
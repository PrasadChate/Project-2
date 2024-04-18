const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetails, scheduleExpiryDate, expiredProducts, totalStockCount, numberOfCategories, totalCategories } = require("../controllers/productController");

const router = express.Router();


//Get all Products from inventory
router.route("/products").get(getAllProducts);

//Create a new product
router.route("/product/new").post(createProduct);

//Update a product
router.route("/product/update/:refNumber").put(updateProduct);

//Delete a product
router.route("/product/:refNumber").delete(deleteProduct);

//GET PRODUCT DETAILS
router.route("/product/:refNumber").get(getProductDetails);

//Get Expiry Products
router.route("/products/expiry").get(scheduleExpiryDate);
router.route("/products/expiredproducts").get(expiredProducts);
router.route("/products/totalstockcount").get(totalStockCount);
router.route("/products/categories").get(totalCategories);

module.exports = router;
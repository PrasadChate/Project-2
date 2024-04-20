const express = require('express');
const {getAllProducts, createProduct} = require('../../controllers/Inventory Master Controlller/productController');

const router = express.Router();

//create company for refNumber
router.route("/product/new").post(createProduct);

//get all companies
router.route("/product/all").get(getAllProducts);

module.exports = router;
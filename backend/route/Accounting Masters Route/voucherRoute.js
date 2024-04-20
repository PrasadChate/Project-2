const express = require("express");
//const { getAllVouchers, createVoucher } = require("../../controllers/Accounting Masters Controller/voucherController");
const {getAllVouchers,createVoucher} = require("../../controllers/Accounting Masters Controller/vouchertypeController");

const router = express.Router();

router.route("/vouchers").get(getAllVouchers);
router.route("/vouchers/new").post(createVoucher);

module.exports = router;

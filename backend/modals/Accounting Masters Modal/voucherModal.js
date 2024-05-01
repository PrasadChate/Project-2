const mongoose = require("mongoose");

const voucherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter voucher name"]
    },
    vtype: {
        type: String,
        required: [true, "Please enter voucher type"]
    },
    abbreviation: {
        type: String,
        required: [true, "Please enter abbreviation"]
    },
    avtype: {
        type: String,
        required: [true, "Please select the activation type"]
    },
    mvtype: {
        type: String,
        required: [true, "Please enter the method of voucher numbering"]
    },
    ueffect: {
        type: String,
        required: [true, "Please select the use of effective dates"]
    },
    zeroValue: {
        type: String,
        required: [true, "Please select whether to allow zero-valued transactions"]
    },
    moptional: {
        type: String,
        required: [true, "Please select whether to make this voucher type optional by default"]
    },
    barcoding: {
        type: String,
        required: [true, "Please select whether to enable barcode printing"]
    },
    anarrow: {
        type: String,
        required: [true, "Please select whether to allow narration in voucher"]
    },
    panarrow: {
        type: String,
        required: [true, "Please select whether to provide narrations for each ledger in voucher"]
    },
    dsignature: {
        type: String,
        required: [true, "Please select whether to use digital signature while printing"]
    },
    pvoucher: {
        type: String,
        required: [true, "Please select whether to print voucher after saving"]
    }
});

module.exports = mongoose.model("Voucher", voucherSchema);

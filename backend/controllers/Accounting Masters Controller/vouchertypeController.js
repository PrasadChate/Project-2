const Voucher = require("../../modals/Accounting Masters Modal/voucherModal");

// CREATE VOUCHER
exports.createVoucher = async (req, res, next) => {
    try {
        const voucher = await Voucher.create(req.body);
        res.status(201).json({
            success: true,
            voucher
        });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// GET ALL VOUCHERS
exports.getAllVouchers = async (req, res) => {
    try {
        const vouchers = await Voucher.find({});
        res.status(200).json({ success: true, vouchers });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

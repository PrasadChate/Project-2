const Voucher = require("../../modals/Accounting Masters Modal/voucherModal");

// CREATE VOUCHER
exports.createVoucher = async (req, res, next) => {
    try {
        const voucher = await Voucher.create(req.body);
        if (!voucher) {
            // If voucher creation failed for some reason
            return res.status(500).json({
                success: false,
                error: "Failed to create voucher",
            });
        }
        // Return a successful response with the created voucher
        res.status(201).json({
            success: true,
            voucher,
        });
    } catch (error) {
        // Handle validation errors or other unexpected errors
        res.status(400).json({ success: false, error: error.message });
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

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    partNumber:{
        type: String,
        required: true,
        unique: true,
    },

    itemName:{
        type: String,
        required: [true, "Please enter item name"],
    },

    underCategory:{
        type: String,
        required: [true, "Please enter Category name"],
    },

    entryMonth:{
        type: String,
        required: true,
        default: (new Date().getMonth() + 1).toString(), // Convert to string
    },

    entryDate:{
        type: String, // Keep as String
        default: Date.now.toString(), // Example of converting timestamp to string
    },

    numOfProducts:{
        type: Number,
        required: [true, "Please enter Quantity of item"],
        min: 1, // Example validation for positive integer
    },

    isTaxApplicable:{
        type: Boolean,
        default: false,
    },

    tax:{
        type: Number,
        default: 0,
    },

    cgst:{
        type: Number,
        default: 0,
    },

    sgst:{
        type: Number,
        default: 0,
    },

    isShelfLife:{
        type: Boolean,
        default: false,
    },

    productExpiryDate:{
        type: String, // Keep as String
        default: "No", // Example default for expiration date
    },

});

module.exports = mongoose.model('products', productSchema);
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    partNumber:{
        type:String,
        required:true,
        unique:true,
    },

    itemName:{
        type:String,
        required:[true, "Please enter item name"],
    },

    underCategory:{
        type:String,
        required:[true, "Please enter Category name"],
    },

    entryMonth:{
        type:String,
        required:true,
        default:new Date().getMonth() + 1
    },

    entryDate:{
        type:String,
        default:Date.now,
    },

    numOfProducts:{
        type:Number,
        required:[true, "Please enter Quantity of item"]
    },

    isTaxApplicable:{
        type:Boolean,
        default:false,
    },

    tax:{
        type:Number,
        default:0,
    },

    cgst:{
        type:Number,
        default:0,
    },

    sgst:{
        type:Number,
        default:0,
    },


    isShelfLife:{
        type:Boolean,
        default:false,
    },

    productExpiryDate:{
        type:String,
        default:"No",
    },

});

module.exports = mongoose.model('item', productSchema);
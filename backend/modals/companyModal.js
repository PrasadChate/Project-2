const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({

    refNumber:{
        type:String,
        required:[true, "Please enter the Reference Number of the product"],
        unique:true,
    },

    companyName:{
        type:String,
        required:[true, "Please enter company name"],
    },

    supplier:{
        type:String,
        required:[true, "Please enter supplier name"],
    },

    mailingName:{
        type:String,
        required:[true, "Please enter mailing name"],
    },

    address:{
        type:String,
        required:[true, "Please enter mailing name"],
    },

    state:{
        type:String,
        required:[true, "Please enter state name"]
    },

    country:{
        type:String,
        required:[true, "Please enter country name"],
    }
});

module.exports = mongoose.model('Company', companySchema);
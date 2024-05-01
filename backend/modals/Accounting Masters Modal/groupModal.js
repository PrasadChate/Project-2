const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please Enter Group name"],
    },

    under:{
        type:String,
        required:[true, "Please Enter group under"],
        default:"Yes"
    },
    subledger:{
        type:String,
        required:[true, "Please select the option"],
        default:"Yes"
    },
    balanceForReporting:{
        type: String,
        required:[true, "Please select the required option"],
        default:"Yes"
    },
    calculation:{
        type:String,
        requiredd:[true, "Please select required option"],
        default:"Yes"
    },
    method:{
        type:String,
        requiredd:[true, "Please enter the required method"]
    }

})

module.exports = mongoose.model("Group", groupSchema);
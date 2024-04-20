const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Please Enter Group name"],
    },

    under:{
        type:String,
        require:[true, "Please Enter group under"],
        default:"Yes"
    },
    subledger:{
        type:String,
        require:[true, "Please select the option"],
        default:"Yes"
    },
    balanceForReporting:{
        type: String,
        require:[true, "Please select the required option"],
        default:"Yes"
    },
    calculation:{
        type:String,
        required:[true, "Please select required option"],
        default:"Yes"
    },
    method:{
        type:String,
        required:[true, "Please enter the required method"]
    }

})

module.exports = mongoose.model("Group", groupSchema);
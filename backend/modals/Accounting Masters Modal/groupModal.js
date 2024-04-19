const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true, "Please Enter Group name"],
        default:true
    },

    under:{
        type:String,
        require:[true, "Please Enter group under"],
        default:true
    },
    subledger:{
        type:Boolean,
        require:[true, "Please select the option"],
        default:true
    },
    balanceForReporting:{
        type: Boolean,
        require:[true, "Please select the required option"],
        default:true
    },
    calculation:{
        type:Boolean,
        required:[true, "Please select required option"],
        default:true
    },
    method:{
        type:String,
        required:[true, "Please enter the required method"]
    }

})

module.exports = mongoose.model("Group", groupSchema);
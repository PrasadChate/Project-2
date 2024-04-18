const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({

    refNumber:{
        type:String,
        required:[true, "Please enter the Reference Number of the product"],
        unique:true,
    },

    productName:{
        type:String,
        required:[true,"Please enter product name"]
    },

    productDescription:{
        type:String,
        required:[true, "Please enter product description"]
    },

    productPrice:{
        type:Number,
        required:[true,"Please enter the price of the product"],
        maxLength:[8, "Price cannot exceed 8 figures"]
    },
    productCategory:{
        type:String,
        required:[true, "Please enter Product Category"],
        
    },

    month:{
        type:Number,
        required:true,
        default:new Date().getMonth() + 1
    },

    productEntryDate:{
        type:Date,
        default:Date.now,
    },

    productExitDate:{
        type:Date,
    },

    productExpiryDate:{
        type:Date,
    },

    numOfProducts:{
        type:Number,
        required:[true, "Please enter product stock"],
        maxLength:[4, "Stock cannot exceed 4 characters"],
        default:0,
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

    totalPrice:{
      type:mongoose.Types.Decimal128,
      set:(value)=>{
        return new mongoose.Types.Decimal128(value.toFixed(2));
      },
      default:0,  
    },

    taxPercentage:{
        type:Number,
        default:18,
    },

    cgstPercentage:{
        type:Number,
        default:9,
    },

    sgstPercentage:{
        type:Number,
        default:9,
    },

    monthColor:{
        type:String,
    },

});


//CALCULATE THE TAX, CGST, SGST
productSchema.pre('save', function(next){

    switch(this.month){
        case 1: this.monthColor = 'Blue';
        break;

        case 2: this.monthColor = 'Green';
        break;

        case 3:this.monthColor = "Yellow";
        break;

        case 4:this.monthColor = "Light Green";
        break;

        case 5:this.monthColor = "Pink";
        break;

        case 6:this.monthColor = "Purple";
        break;

        case 7:this.monthColor = "Orange";
        break;

        case 8:this.monthColor = "Peach";
        break;

        case 9:this.monthColor = "Brown";
        break;

        case 10:this.monthColor = "Cyan";
        break;

        case 11:this.monthColor = "Violet";
        break;

        case 12:this.monthColor = "Royal Blue";
        break;
    }

    try{
        this.tax = (this.productPrice * this.taxPercentage)/100;
        this.cgst = (this.productPrice * this.cgstPercentage)/100;
        this.sgst = (this.productPrice * this.sgstPercentage)/100;
        this.totalPrice = (this.productPrice * this.numOfProducts) + this.tax;

        next();
    }catch(err){
        next(err);
    }
});

productSchema.virtual("formattedExpiryDate").get(function(){
    if(this.productExpiryDate){
        const options = {day:"2digit", month:"2-digit", year:"numeric"};
        return this.productExpiryDate.toLocaleDateString("en-IN", options);
    }

    return null;
});


module.exports=mongoose.model('Product', productSchema);
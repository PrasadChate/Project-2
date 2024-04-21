const express = require('express');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const errorMiddleware = require("./middleWare/error");

// Middlewares 
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());



//ROUTE EXPORTS
// const product = require("./route/productRoute");
const user = require("./route/userRoute");
const company = require("./route/companyRoutes");
// const item = require("./route/itemRoutes");
const voucher=require("./route/Accounting Masters Route/voucherRoute");

//Accounting Masters routes
const group = require("./route/Accounting Masters Route/groupRoute");


//Inventory Masters router
const product = require("./route/Inventory Masters Route/productRoute")
//app.use
app.use("/rac", product);
app.use("/rac", user);
app.use('/rac', company);
app.use("/rac", group);
app.use("/rac",voucher);


// Middleware for Errors
app.use(errorMiddleware);

module.exports =app;
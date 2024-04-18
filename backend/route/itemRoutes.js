const express = require('express');
const {createitem, getitems} = require("../controllers/itemController");
const { route } = require('./userRoute');


const router = express.Router();

router.route("/item/create").post(createitem);
router.route("/item/get").get(getitems);


module.exports = router;



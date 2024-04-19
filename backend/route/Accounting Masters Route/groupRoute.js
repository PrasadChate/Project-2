const express = require("express");
const { getAllGroups, createGroup } = require("../../controllers/Accounting Masters Controller/groupController");
const router = express.Router();

router.route("/groups").get(getAllGroups);
router.route("/groups/new").post(createGroup);


module.exports = router
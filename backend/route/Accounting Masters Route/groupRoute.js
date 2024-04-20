const express = require("express");
const { getAllGroups, createGroup, alterGroup } = require("../../controllers/Accounting Masters Controller/groupController");
const router = express.Router();

router.route("/groups").get(getAllGroups);
router.route("/groups/new").post(createGroup);
router.route("group/:id").put(alterGroup)


module.exports = router
const express = require("express");
const { getAllGroups, createGroup, alterGroup, getGroupNames, getGroupUnder } = require("../../controllers/Accounting Masters Controller/groupController");
const router = express.Router();

router.route("/groups").get(getAllGroups);
router.route("/groups/new").post(createGroup);
router.route("/group/:id").put(alterGroup);
router.route("/group/groupname").get(getGroupNames);
router.route("/group/groupunder").get(getGroupUnder);

module.exports = router
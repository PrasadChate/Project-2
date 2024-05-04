const express = require("express");
const router = express.Router();
const sendNotifications = require("../utils/sendNotifications");

// Route for fetching notifications
router.get("/notifications", async (req, res) => {
  try {
    const notifications = await sendNotifications();
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

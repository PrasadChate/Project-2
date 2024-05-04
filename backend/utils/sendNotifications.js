const checkQuantities = require("./checkQuantities");

const sendNotifications = async () => {
  try {
    const notifications = await checkQuantities();

    // Send notifications to clients connected through websockets or store them in a database for retrieval by the frontend

    return notifications;
  } catch (error) {
    console.error("Error sending notifications:", error);
    return [];
  }
};

module.exports = sendNotifications;

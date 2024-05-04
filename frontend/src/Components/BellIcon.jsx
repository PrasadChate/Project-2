// frontend/src/components/BellIcon.jsx

import React, { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import getNotifications from "../../utils/notificationService"; // Adjust path accordingly

const BellIcon = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getNotifications()
        .then((data) => setNotifications(data))
        .catch((error) =>
          console.error("Error fetching notifications:", error)
        );
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <FaBell style={{ fontSize: "1.5rem" }} />
      {notifications.length > 0 && (
        <div>
          <h4>Notifications:</h4>
          {notifications.map((notification) => (
            <div key={notification.productId}>{notification.message}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BellIcon;

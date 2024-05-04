import axios from "axios";

const getNotifications = async () => {
  try {
    const response = await axios.get("/api/notifications");
    return response.data;
  } catch (error) {
    console.error("Error fetching notifications:", error);
    return [];
  }
};

export default getNotifications;

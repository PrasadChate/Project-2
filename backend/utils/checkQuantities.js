const Product = require("../modals/Inventory Masters Modal/productModal");

const checkQuantities = async () => {
  try {
    const products = await Product.find();
    const notifications = [];

    for (const product of products) {
      if (product.quantity < product.minQuantity) {
        notifications.push({
          productId: product._id,
          message: `Quantity of ${product.name} is below minimum!`,
        });
      } else if (product.quantity > product.maxQuantity) {
        notifications.push({
          productId: product._id,
          message: `Quantity of ${product.name} is above maximum!`,
        });
      }
    }

    return notifications;
  } catch (error) {
    console.error("Error checking quantities:", error);
    return [];
  }
};

module.exports = checkQuantities;

const db = require("../models");
const { updateStock } = require("./product.controller");

const SellFormDetail = db.SellFormDetail;
const Product = db.Product;

// Reference cart:
// cart = [
//   {
//     ProductId,
//     ProductTypeId,
//     quantity,
//     subtotal,
//   }
// ]

const createSellDetails = async (cart) => {
  let success;
  const result = await Promise.all(
    cart.map(async (item) => {
      try {
        const product = await Product.findByPk(item.ProductId);
        if (product && item.quantity <= product.stock) {
          const created = await SellFormDetail.create({
            ...item,
          });
          await updateStock(item.ProductId, item.quantity);
          console.log(created);
          if (!created) {
            success = false;
          }
        } else {
          console.log("Not enough stock");
          success = false;
        }
      } catch (error) {
        console.log("Something went wrong", error);
        success = false;
      }
    })
  )
    .then((details) => {
      console.log("Details created");
      success = true;
    })
    .catch((err) => {
      console.log(err);
      success =  false;
    });
  return success;
};

module.exports = { createSellDetails };

const db = require("../models");
const { updateStock } = require("./product.controller");

const BuyFormDetail = db.BuyFormDetail;
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

const createBuyDetails = async (cart) => {
  let success;
  const result = await Promise.all(
    cart.map(async (item) => {
      try {
        const product = await Product.findByPk(item.ProductId);
        if (product) {
          const created = await BuyFormDetail.create({
            ...item,
          });
          await updateStock(item.ProductId, item.quantity, "buy");
          console.log(created);
          if (!created) {
            success = false;
          }
        } else {
          console.log("Not found product");
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
      success = false;
    });

  return success;
};

module.exports = { createBuyDetails };

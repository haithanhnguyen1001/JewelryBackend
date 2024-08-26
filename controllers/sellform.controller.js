const db = require("../models");
const { createSellDetails } = require("./sellformdetail.controller");
const SellForm = db.SellForm;


// Reference cart:
// cart = [
//   {
//     ProductId,
//     ProductTypeId,
//     quantity,
//     subtotal,
//   }
// ]
const createSellForm = async (req, res) => {
  const { customer, cart, total } = req.body;
  let sellId;
  let result;
  let response;
  let cartToDetails;
  try {
    result = await SellForm.create({ customer, total });
    if (result) {
      sellId = result.id;
      console.log("Sell form initialized successfully", sellId);
      response = {...result};
      cartToDetails = cart.map((item) => {
        return {
          ...item,
          SellFormId: sellId,
        };
      });
    }
    const success = await createSellDetails(cartToDetails);
    if (!success) {
      res.status(400).send("Something went wrong");
      await result.destroy();
      return;
    }
    res.status(200).send(response);
  } catch (err) {
    console.log(err);
    if (result) {
      await result.destroy();
    }
    res.status(500).send("Something went wrong");
  }
};

// INFO: "include"s to get details, related product types.
const getAllSellForm = async (req, res) => {
  let forms = await SellForm.findAll({
    include: [
      {
        model: db.SellFormDetail,
        include: [
          {
            model: db.Product,
          },
          {
            model: db.ProductType,
          },
        ],
      },
    ],
  });
  if (forms) {
    if (forms.length <= 0) res.status(200).send("No sales found");
    else {
      res.status(200).send(forms);
    }
  } else {
    res.status(500).send("Something went wrong");
  }
};

const deleteSellForm = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await SellForm.findByPk(id);
    if (result) {
      await result.destroy();
      res.status(200).send("form deleted");
    } else {
      res.status(404).send("form not found")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong")
  }
}

module.exports = { createSellForm, getAllSellForm, deleteSellForm };

const db = require("../models");
const { createBuyDetails } = require("./buyformdetail.controller");


const BuyForm = db.BuyForm;

const createBuyForm = async (req, res) => {
  const { total, cart, SupplierId } = req.body;
  console.log(req.body.cart);
  let result;
  let response;
  let buyId;
  let cartToDetails;
  try {
    result = await BuyForm.create({ total, SupplierId });
    if (result) {
      buyId = result.id;
      response = { ...result };
      cartToDetails = cart.map((item) => {
        return {
          ...item,
          BuyFormId: buyId,
        };
      });
    }
    const success = await createBuyDetails(cartToDetails);
    if (!success) {
      console.log(success);
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

const getAllBuyForm = async (req, res) => {
  let forms = await BuyForm.findAll({
    include: [
      {
        model: db.BuyFormDetail,
        include: [
          {
            model: db.Product,
          },
          {
            model: db.ProductType,
          },
        ],
      },
      {
        model: db.Supplier,
      },
    ],
  });
  if (forms) {
    if (forms.length <= 0) res.status(200).send("No buyform found");
    else {
      res.status(200).send(forms);
    }
  } else {
    res.status(500).send("Something went wrong");
  }
};

const deleteBuyForm = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await BuyForm.findByPk(id);
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

module.exports = { createBuyForm, getAllBuyForm, deleteBuyForm };

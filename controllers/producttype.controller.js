const db = require("../models");

const ProductTypes = db.ProductType;

// Main work

// Lấy toàn bộ loại sp
const getAllProductTypes = async (req, res) => {
  const productTypes = await ProductTypes.findAll();

  if (productTypes) {
    if (productTypes.length <= 0)
      res.status(200).send("No product types found");
    else {
      res.status(200).send(productTypes);
    }
  } else {
    res.status(500).send("Something went wrong");
  }
};

// Tạo loại sp mới
const createNewProductType = async (req, res) => {
  const { name, unit, interest, UnitId } = req.body;
  if (!name || !unit || !interest || !UnitId) {
    res.status(400).send("Please provide name, unit and interest");
  }
  const duplicate = await ProductTypes.findOne({
    where: {
      name: name,
    },
  });
  if (duplicate) {
    console.log("duplicate record found");
    res.status(200).send("Name already exists");
    return;
  }
  const newType = await ProductTypes.create({
    name,
    unit,
    interest,
    UnitId
  });
  if (newType) {
    console.log("new product type created");
    res.status(200).send(newType);
  } else {
    res.status(500).send("Something went wrong");
  }
};

// Tìm với id
const getWithId = async (req, res) => {
  const toFindId = req.params.id;
  try {
    const result = await ProductTypes.findByPk(toFindId);
    if (result) {
      console.log(`Product type with id ${toFindId} found.`);
      res.status(200).send(result);
    } else {
      res.status(200).send("Product type couldn't be found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};

const updateProductType = async (req, res) => {
  const toUpdateId = req.params.id;
  const { name, unit, interest, UnitId } = req.body;
  let duplicate = await ProductTypes.findOne({
    where: {
      name: name,
    }
  });
  if (duplicate) {
    res.status(400).send("Duplicate name");
    return;
  }
  let productType = await ProductTypes.findByPk(toUpdateId);
  if (productType) {
    productType.name = name ? name : productType.name;
    productType.unit = unit ? unit : productType.unit;
    productType.interest = interest ? interest : productType.interest;
    productType.UnitId = UnitId ? UnitId : productType.UnitId;
    await productType.save();
    console.log(`productType ${toUpdateId} updated succesfully.`);
    res.status(200).send(productType);
  } else {
    res.status(400).send("productType not found.");
  }
};

const deleteProductType = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await ProductTypes.findByPk(id);
    if (result) {
      await result.destroy();
      res.status(200).send("Type deleted");
    } else {
      res.status(404).send("Type not found")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong")
  }
}

module.exports = {
  getAllProductTypes,
  createNewProductType,
  getWithId,
  updateProductType,
  deleteProductType
};

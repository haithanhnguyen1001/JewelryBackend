const db = require('../models')

const Product = db.Product

const getAllProducts = async (req, res) => {
  const products = await Product.findAll({
    include: [
      {
        model: db.ProductType
      }
    ]
  });
  // console.log(products);
  if (products) {
    if (products.length <= 0) res.status(200).send("No product found");
    else {
      res.status(200).send(products);
    }
  }
}

const createProduct = async (req, res) => {
  const { name, price, stock, ProductTypeId } = req.body;
  let result;
  if (!name || !price) { res.status(400).send("Please provide name and price, stock will be automatically set to 0.") }
  const duplicate = await Product.findOne({
    where: {
      name: name
    }
  });
  if (duplicate) {
    console.log("duplicate record found");
    res.status(200).send("Name already exists");
    return;
  }
  try {
    result = await db.ProductType.findByPk(ProductTypeId);
    if (!result) {
      res.status(200).send("Product type couldn't be found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong while finding provided product type");
  }
  result = await Product.create({
    name, price, stock, ProductTypeId
  });
  if (result) {
    console.log("new product created");
    res.status(200).send(result);
  }
  else {
    res.status(500).send("Something went wrong")
  }
}

const getWithId = async (req, res) => {
  const toFindId = req.params.id;
  try {
    const result = await ProductTypes.findByPk(toFindId);
    if (result) {
      console.log(`Product with id ${toFindId} found.`);
      res.status(200).send(result);
    }
    else {
      res.status(200).send("Product type couldn't be found");
    }
  } catch (error) {
    res.status(500).send("Something went wrong")
  }
}

const updateProduct = async (req, res) => {
  const { name, price, stock, ProductTypeId } = req.body;
  const duplicate = await Product.findOne({
    where: {
      name: name
    }
  });
  if (duplicate) {
    console.log("duplicate record found");
    res.status(400).send("Name already exists");
    return;
  }
  const updateId = req.params.id;
  let product = await Product.findByPk(updateId);
  if (product) {
    product.name = name ? name : product.name;
    product.price = price ? price : product.price;
    product.stock = stock ? stock : product.stock;
    product.ProductTypeId = ProductTypeId ? ProductTypeId : product.ProductTypeId;
    await product.save();
    console.log(`Product ${updateId} updated succesfully.`);
    res.status(200).send(product);
  }
  else {
    res.status(400).send("Product not found.");
  }
}

const updateStock = async (productId, qty, type="sell") => {
  let product;
  try {
    product = await Product.findByPk(productId);
    if (product) {
      if (type === "buy") {
        product.stock = product.stock + qty;
      } else {
        product.stock = product.stock - qty;
      }
      await product.save();
      console.log(`Product ${productId}'s stock updated succesfully.`);
    }
  } catch (error) {
    console.log(error)
  }
}

const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    let result = await Product.findByPk(id);
    if (result) {
      await result.destroy();
      res.status(200).send("prod deleted");
    } else {
      res.status(404).send("prod not found")
    }
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong")
  }
}

module.exports = { getAllProducts, createProduct, getWithId, updateProduct, updateStock, deleteProduct }
const express = require('express');
const { getAllProducts, createProduct, getWithId, updateProduct, deleteProduct } = require('../../controllers/product.controller.js');
const productRouter = express.Router();
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission


productRouter.get("/", getAllProducts);
productRouter.get("/:id", getWithId);
productRouter.post("/new", createProduct);
productRouter.put("/update/:id", updateProduct);
productRouter.delete("/delete/:id", deleteProduct);

//productRouter.get("/", checkUserPermission('read'), getAllProducts);
//productRouter.get("/:id", checkUserPermission('read'), getWithId);
//productRouter.post("/new", checkUserPermission('create'), createProduct);
//productRouter.put("/update/:id", checkUserPermission('update'), updateProduct);
module.exports = productRouter;
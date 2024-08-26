const express = require("express");
const {
  getAllProductTypes,
  createNewProductType,
  getWithId,
  updateProductType,
  deleteProductType
} = require("../../controllers/producttype.controller.js");
const router = express.Router();
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get("/", getAllProductTypes);
router.post("/new-type", createNewProductType);
router.get("/:id", getWithId);
router.put("/update/:id", updateProductType);
router.delete("/delete/:id", deleteProductType);
//router.get("/", checkUserPermission('read'), getAllProductTypes);
//router.post("/new-type", checkUserPermission('create'), createNewProductType);
//router.get("/:id", checkUserPermission('read'), getWithId);
//router.put("/update/:id", checkUserPermission('update'), updateProductType);
module.exports = router;

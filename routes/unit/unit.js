const express = require('express');
const { getAllUnits, getWithId, createUnit, updateUnit,deleteUnit } = require('../../controllers/unit.controller');
const router = express.Router();
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission


router.get("/", getAllUnits);
router.get("/:id", getWithId);
router.post("/new", createUnit);
router.put("/update/:id", updateUnit);
router.delete("/delete/:id", deleteUnit);

//router.get("/", checkUserPermission('read'), getAllProducts);
//router.get("/:id", checkUserPermission('read'), getWithId);
//router.post("/new", checkUserPermission('create'), createProduct);
//router.put("/update/:id", checkUserPermission('update'), updateProduct);
module.exports = router;
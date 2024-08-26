const express = require('express');
const router = express.Router();
const controller = require("../../controllers/supplier.controller")
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get('/', controller.getAllSuppliers);
router.post('/create', controller.createSupplier)
router.put('/update/:id', controller.updateSupplier)
router.delete('/delete/:id', controller.deleteSupplier)
//router.get('/', checkUserPermission('read'), controller.getAllSuppliers);
//router.post('/create', checkUserPermission('create'), controller.createSupplier)
//router.put('/update/:id', checkUserPermission('update'),controller.updateSupplier)
module.exports = router;
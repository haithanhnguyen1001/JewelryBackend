const express = require('express');
const router = express.Router();
const buyController = require('../../controllers/buyform.controller')
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get('/', buyController.getAllBuyForm);
router.post('/create', buyController.createBuyForm);
router.delete('/delete/:id', buyController.deleteBuyForm);
//router.get('/', checkUserPermission('read'), buyController.getAllBuyForm);
//router.post('/create', checkUserPermission('create), buyController.createBuyForm);
module.exports = router;
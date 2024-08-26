const express = require('express');
const { createSellForm, getAllSellForm, deleteSellForm } = require('../../controllers/sellform.controller.js');
const router = express.Router();
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get('/', getAllSellForm);
router.post('/create', createSellForm);
router.delete('/delete/:id', deleteSellForm);

//router.get('/', checkUserPermission('read'), getAllSellForm);
//router.post('/create', checkUserPermission('create'), createSellForm);
module.exports = router;
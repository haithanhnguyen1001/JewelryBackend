const express = require('express');
const { getAllServiceForm, createServiceForm, deleteServiceForm } = require('../../controllers/serviceform.controller');
const { updateServiceDetail, getServiceDetails } = require('../../controllers/serviceformdetail.controller');
const router = express.Router();
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get('/', getAllServiceForm);
router.put('/detail/:id', updateServiceDetail);
router.get('/detail/:id', getServiceDetails);
router.post('/', createServiceForm);
router.delete('/delete/:id', deleteServiceForm);

//router.get('/', checkUserPermission('read'),getAllServiceForm);
//router.put('/detail/:id', checkUserPermission('update'),updateServiceDetail);
//router.get('/detail/:id', checkUserPermission('read'),getServiceDetails);
//router.post('/', checkUserPermission('create'),createServiceForm);
module.exports = router;
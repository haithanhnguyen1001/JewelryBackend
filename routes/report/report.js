const express = require('express');
const router = express.Router();
const reportController = require('../../controllers/report.controller')
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get('/', reportController.getAllReport)
router.post('/create', reportController.createReport);
//router.get('/', checkUserPermission('read'), reportController.getAllReport)
//router.post('/create', checkUserPermission('create'),reportController.createReport);
module.exports = router;
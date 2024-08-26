const express = require('express');
const router = express.Router();
const parameterController = require('../../controllers/parameter.controller')
//const checkUserPermission = require("../../middleware/authorization").checkUserPermission

router.get("/", parameterController.getParameter)
router.post("/", parameterController.createParameter)
router.put("/:id", parameterController.updateParameter)
//router.get("/parameter", parameterController.getParameter)
//router.post("/parameter", checkUserPermission('change'), parameterController.createParameter)
//router.put("/parameter/:id", checkUserPermission('change'), parameterController.updateParameter)
module.exports = router;
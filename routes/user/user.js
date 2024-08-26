const express = require('express');
const router = express.Router();
const authentication = require('../../middleware/authentication.js')
const {
    login,
    signup,
    logout,
} = require("../../controllers/user.controller.js");

router.post('/signup', authentication.saveUser, signup);
router.post('/login', login);
router.post('/logout', authentication.verifyAccessToken, logout);

module.exports = router;
const express = require("express");
const router = express.Router();

const userController = require("../../routes/user/userController/serviceSignin");
const userController2 = require("../../routes/user/userController/serviceLogin");

//router.post("/signin", userController.signIn);
router.post("/login", userController2.logIn);

module.exports = router;

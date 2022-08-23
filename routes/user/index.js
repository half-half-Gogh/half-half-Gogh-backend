const express = require("express");
const router = express.Router();

const userController = require("./userController/serviceSignin");
const userController2 = require("./userController/serviceLogin");

router.post("/signin", userController.signIn);
router.post("/login", userController2.logIn);

module.exports = router;

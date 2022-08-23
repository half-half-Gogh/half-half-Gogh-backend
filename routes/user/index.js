const express = require("express");
const router = express.Router();

const userController = require("../firebase/service_signin");
const userController2 = require("../firebase/service_login");

//router.post("/signin", userController.signIn);
router.post("/login", userController2.logIn);

module.exports = router;

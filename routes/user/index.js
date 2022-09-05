const express = require("express");
const router = express.Router();

const userSignup = require("../user/userController/serviceSignup");
const userSignin = require("../user/userController/serviceSignin");
const userGet = require("../user/userController/getUserName");

router.post("/signup", userSignup.userSignup);
router.post("/signin", userSignin.userSignin);
router.post("/getusername", userGet.getUsername);

module.exports = router;

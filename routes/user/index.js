const express = require("express");
const router = express.Router();

const userSignup = require("./service/serviceSignup");
const userSignin = require("./service/serviceSignin");
const userGet = require("./service/getUserName");

router.post("/signup", userSignup.userSignup);
router.post("/signin", userSignin.userSignin);
router.post("/getusername", userGet.getUsername);

module.exports = router;

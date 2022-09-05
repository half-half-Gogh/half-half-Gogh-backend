require("../../../Configuration/firebaseAuthConfig");
const { response } = require("express");
const firebase = require("firebase");
const { createUserWithEmailAndPassword, getAuth } = require("firebase/auth");
require("firebase/auth");
require("firebase/firestore");
const admin = require("firebase-admin");

auth = getAuth;

const db = admin.firestore();

exports.userSignup = (req, res) => {
  console.log("Signup test reqest Received");

  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.id, req.body.password)
    .then(() => {
      console.log("새 유저 생성 완료:", req.body.id);
      db.collection("users").doc(req.body.id).set({
        id: req.body.id,
        username: req.body.username,
      });
      console.log("회원가입 완료");
      res.send("회원가입 완료");
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
      res.send("회원가입 실패 error:" + error.message);
      //res.json({message: error});
    });
};

require("../../../Configuration/firebaseAuthConfig");
const { response } = require("express");
const firebase = require("firebase");
const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} = require("firebase/auth");
require("firebase/auth");
require("firebase/firestore");
const admin = require("firebase-admin");

auth = getAuth;

exports.userSignin = (req, res) => {
  console.log("login test reqest Received");

  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.id, req.body.password)
    .then(() => {
      console.log("로그인 완료: ", req.body.id);
      res.send("로그인 완료");
    })
    .catch((error) => {
      console.log("로그인 에러: ", error);
      res.send("로그인 실패 error: " + error.message);
      //res.json({message: error});
    });
};

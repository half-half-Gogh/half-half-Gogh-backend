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
  console.log("Signup reqest Received");

  firebase
    .auth()
    .createUserWithEmailAndPassword(req.body.id, req.body.password)
    .then(() => {
      console.log("Signup Completed:", req.body.id);

      db.collection("users").doc(req.body.id).set({
        id: req.body.id,
        username: req.body.username,
      });

      res.json({ signupStatus: true, signupUseid: req.body.id });
    })
    .catch((error) => {
      console.log("Signup Error: ", error);
      res.json({ signupStatus: false, signupError: error.message });
    });
};

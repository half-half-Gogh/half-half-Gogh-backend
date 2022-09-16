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

const db = admin.firestore();

auth = getAuth;

exports.userSignin = (req, res) => {
  console.log("Signin reqest Received");

  firebase
    .auth()
    .signInWithEmailAndPassword(req.body.id, req.body.password)
    .then(() => {
      console.log("Signin Completed: ", req.body.id);

      const usernameRef = db.collection("users");
      const snapshot = usernameRef
        .where("id", "==", req.body.id)
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            console.log(doc.id, "=>", doc.data());
            res.json({
              signinStatus: true,
              signinUserId: req.body.id,
              signinUserName: doc.data().username,
              loginToken: doc.data().loginToken,
            });
          });
        });
    })
    .catch((error) => {
      console.log("Signin Error: ", error);
      res.json({ signinStatus: false, signinError: error.message });
    });
};

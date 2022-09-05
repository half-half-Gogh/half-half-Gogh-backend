require("../../../Configuration/firebaseAuthConfig");
const { response } = require("express");
const firebase = require("firebase");
require("firebase/auth");
require("firebase/firestore");
const admin = require("firebase-admin");

const db = admin.firestore();

exports.getUsername = (req, res) => {
  console.log("finding id-username request received: ", req.body.id);
  const usernameRef = db.collection("users");
  const snapshot = usernameRef
    .where("id", "==", req.body.id)
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        console.log(doc.id, "=>", doc.data());
        res.json({ userName: doc.data().username });
      });
    })
    .catch((error) => {
      console.log("Error getting documents", error);
    });
};

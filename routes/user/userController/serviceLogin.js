const { getAuth, UserRecord } = require("firebase-admin/auth");
const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

//회원가입
exports.signIn = (req, res) => {
  console.log("Signin reqest Received");

  getAuth()
    .createUser({
      uid: req.body.password,
      email: req.body.id,
      //displayName: req.body.username,
    })
    .then((userRecord) => {
      console.log("Successfully created new user:", userRecord.uid);
      db.collection("users").doc(req.body.id).set({
        id: req.body.id,
        username: req.body.username,
      });
      res.send("Sign-In Completed");
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
      const Error = toString(error);
      res.send("Error creating new user:" + Error);
    });
};

const { defineBoolean } = require("firebase-functions/v2/params");
const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.responseNickName = async (req, res) => {
  const token = req.body.loginUserId;

  const refer = db.collection("users").doc(loginUserId);
  const snapshot = await refer.get();
  const userName = snapshot.data().username;
  const loginToken = snapshot.data().loginToken;

  res.json({ userName: userName, loginToken: loginToken });
};

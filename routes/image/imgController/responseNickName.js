const { defineBoolean } = require("firebase-functions/v2/params");
const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.responseNickName = async (req, res) => {
  try {
    const loginToken = req.body.loginToken;

    const refer = db.collection("users").doc(loginToken);
    const snapshot = await refer.get();
    const userName = snapshot.data().username;
    const loginUserId = snapshot.data().id;

    res.json({ userName: userName, loginUserId: loginUserId });
  } catch (err) {
    console.log(err);
  }
};

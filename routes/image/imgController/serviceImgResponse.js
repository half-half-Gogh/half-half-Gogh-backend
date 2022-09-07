const ArrayList = require("arraylist");
const { json } = require("express");
const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.imgResponse = async (req, res) => {
  const galleryName = req.body.galleryName;
  const idRef = db.collection(galleryName);

  const snapshot = await idRef.get();
  const pResult = [];
  snapshot.forEach((doc) => {
    const like = doc.data().like.toString().split(",");
    const ch = JSON.stringify(like);
    pResult.push(
      JSON.parse(
        `{"src": "${doc.data().imgPath}", "drawer": "${
          doc.data().drawer
        }", "like": ${ch}}`
      )
    );
  });
  console.log("sended data");
  res.json({ pResult });
};

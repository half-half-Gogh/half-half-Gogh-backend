const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.imgResponse = async (req, res) => {
  const galleryName = req.body.galleryName;
  const idRef = db.collection(galleryName);

  const snapshot = await idRef.get();
  const pResult = [];
  snapshot.forEach((doc) => {
    console.log(doc.data().imgPath);
    pResult.push(doc.data().imgPath);
  });
  res.json({ pResult });
};

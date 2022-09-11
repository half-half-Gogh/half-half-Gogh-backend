const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.pressLike = async (req, res) => {
  const galleryName = req.body.galleryName;
  const imgId = req.body.imgId;
  const liker = req.body.liker;

  const idRef = db.collection(galleryName).doc(imgId);
  const snapshot = await idRef.get();

  const updatedLike = snapshot.data().like;

  const check = updatedLike.indexOf(liker);
  if (check != -1) {
    updatedLike.push(liker);
    idRef.update({ like: updatedLike });
  } else {
    updatedLike.splice(check, 1);
    idRef.update({ like: updatedLike });
  }
};

const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.pressLike = (req, res) => {
  const galleryName = req.body.galleryName;
  const imgId = req.body.imgId;
  const liker = req.body.liker;
  console.log("press On");
  db.collection(galleryName)
    .doc(imgId)
    .add({
      // error!!!
      like: liker,
    })
    .then(() => {
      console.log(`${liker} liker saved on database`);
    })
    .catch((err) => {
      console.log(err);
    });
};

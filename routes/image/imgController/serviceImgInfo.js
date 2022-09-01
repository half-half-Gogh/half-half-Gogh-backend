const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.getImgInfo = async (req, res) => {
  const galleryName = req.body.galleryName;
  const drawer = req.body.drawer;
  const imgId = req.body.imgId;
  const imgPath = `public/images/${imgId}`;
  db.collection(galleryName)
    .doc(imgId)
    .set({
      drawer: drawer,
      imgPath: imgPath,
    })
    .then(() => {
      console.log(`${[imgPath]} image saved on database`);
    })
    .catch((err) => {
      console.log(err);
    });
};

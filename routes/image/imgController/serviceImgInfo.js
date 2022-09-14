const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.getImgInfo = async (req, res) => {
  const loginUserId = req.body.loginUserId;
  const drawer = req.body.drawer;
  const imgId = req.body.imgId;
  const emptyArr = [];
  const imgPath = `${imgId}`;
  db.collection(loginUserId)
    .doc(imgId)
    .set({
      drawer: drawer,
      imgPath: imgPath,
      like: emptyArr,
    })
    .then(() => {
      console.log(`${[imgPath]} image saved on database`);
    })
    .catch((err) => {
      console.log(err);
    });
};

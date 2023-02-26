const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

exports.pressLike = async (req, res) => {
  try {
    const loginUserId = req.body.loginUserId;
    const imgId = req.body.imgId;
    const liker = req.body.liker;

    const idRef = db.collection(loginUserId).doc(imgId);
    const snapshot = await idRef.get();

    const updatedLike = snapshot.data().like;

    const check = updatedLike.indexOf(liker);
    if (check == -1) {
      console.log(`${check} : like updated!!`);
      updatedLike.push(liker);
      console.log(updatedLike);
      idRef.update({ like: updatedLike });
    } else {
      console.log(`${check} : like canceled`);
      updatedLike.splice(check, 1);
      console.log(updatedLike);
      idRef.update({ like: updatedLike });
    }
  } catch (err) {
    console.log(err);
  }
};

const { getAuth, UserRecord } = require("firebase-admin/auth");
const admin = require("../../../Configuration/firebaseAuthConfig");
const db = admin.firestore();

//로그인
exports.logIn = (req, res) => {
  console.log("Login reqest Received");

  getAuth()
    .getUsers([{ uid: req.body.password }, { email: req.body.id }])
    .then((getUsersResult) => {
      console.log("Successfully fetched user data:");
      getUsersResult.users.forEach((userRecord) => {
        console.log(userRecord);

        res.send("Successfully Logined");
      });

      console.log("Unable to find users corresponding to these identifiers:");
      getUsersResult.notFound.forEach((userIdentifier) => {
        console.log(userIdentifier);
        res.send("Unable to find users"); //case 나눠야함 - id. password
      });
    })
    .catch((error) => {
      console.log("Error fetching user data:", error);
    });
};

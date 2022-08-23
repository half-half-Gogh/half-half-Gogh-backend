const response = require("express");
const admin = require("firebase-admin");
const { initializeApp } = require("firebase-admin/app");
const { getAuth } = require("firebase-admin/auth");

const serviceAccount = require("./hhgDbFirebaseAdminsdk.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://half-half-gogh-db-default-rtdb.asia-southeast1.firebasedatabase.app",
});

module.exports = admin;

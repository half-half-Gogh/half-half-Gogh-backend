const { response } = require("express");
const firebase = require("firebase/app");
const { initializeApp } = require("firebase/app");
const { firestore } = require("firebase-functions");
require("firebase/auth");
require("firebase/firestore");
const admin = require("firebase-admin");

const serviceAccount = require("./hhg_adminsdk.json");

const Config = {
  apiKey: "AIzaSyATnksxc1ARdZ1hfwiqWoiZwjqwm9xeIsg",
  authDomain: "half-half-gogh-db.firebaseapp.com",
  databaseURL:
    "https://half-half-gogh-db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "half-half-gogh-db",
  storageBucket: "half-half-gogh-db.appspot.com",
  messagingSenderId: "927220475662",
  appId: "1:927220475662:web:86eb5e89de1acd3a9e195f",
  measurementId: "G-1T9HTL0VPL",
};

initializeApp(Config);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://half-half-gogh-db-default-rtdb.asia-southeast1.firebasedatabase.app",
});

module.exports = firebase;

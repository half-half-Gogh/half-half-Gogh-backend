const express = require("express");
const router = express.Router();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

upload = multer({ storage: storage });

router.post("/upload", upload.single("hello"), (req, res) => {
  console.log("got image");
  const fileName = req.file.filename;
  console.log(req.file);
});

router.get("/fuck", (req, res) => {
  res.json("fuck");
});

module.exports = router;
//img

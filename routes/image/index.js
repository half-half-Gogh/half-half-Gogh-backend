const express = require("express");
const router = express.Router();
const multer = require("multer");
const imgService = require("./imgController/serviceImgInfo");
const imgSet = require("./imgController/serviceImgResponse");
const pressLike = require("./imgController/pressLike");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `public/images/`); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});

upload = multer({ storage: storage });

router.post("/upload", upload.single("halfhalfgogh"), (req, res) => {
  console.log(req.file.fieldname);
  const fileName = req.file.filename;

  res.json({ fileName: fileName });
});

router.post("/imgInfo", imgService.getImgInfo);

router.post("/imgResponse", imgSet.imgResponse);

router.post("/pressLike", pressLike.pressLike);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  uploadFile,
} = require("../controllers/storage");

router.post("/", uploadFile);

module.exports = router;

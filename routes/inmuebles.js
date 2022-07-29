const express = require("express");
const router = express.Router();
const {
  getInmuebles,
  createItem,
  getItem,
  getNoticias,
} = require("../controllers/inmuebles");

router.get("/noticias", getNoticias);

router.get("/", getInmuebles);

router.post("/", createItem);

router.get("/:id", getItem);

module.exports = router;

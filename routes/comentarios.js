const express = require("express");
const router = express.Router();
const {
  getItems,
  customGetItem,
  createItem,
} = require("../controllers/comentarios");

router.get("/", getItems);

router.post("/", createItem);

router.get("/:id", customGetItem);

router.put("/:id");

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  getItems,
  createItem,
  getItem,
  customGetItem,
  updateItem,
} = require("../controllers/propietarios");

router.get("/", getItems);

router.post("/", createItem);

router.get("/:id", getItem);

router.get("/propietario-inmueble/:id", customGetItem);

router.put("/:id", updateItem);

module.exports = router;

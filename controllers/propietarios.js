const { matchedData } = require("express-validator");
const { propietariosModel } = require("../models/index");

//Obtener lista de base de datos
const getItems = async (req, res) => {
  try {
    const user = req.user;

    const data = await propietariosModel.findAll();
    res.send(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

//Creando un item

const createItem = async (req, res) => {
  try {
    const body = req.body;

    const data = await propietariosModel.create(body);
    res.send(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getItem = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const data = await propietariosModel.findAll({ where: { id } });
    res.send(data);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getItems, createItem, getItem };

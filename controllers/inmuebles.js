const { matchedData } = require("express-validator");
const { inmueblesModel } = require("../models/index");

//Obtener lista de base de datos

const getItems = async (req, res) => {
  try {
    const user = req.user;

    const data = await inmueblesModel.findAllData();
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

    console.log(body);

    const data = await inmueblesModel.create(body);
    res.send(data);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { getItems, createItem };

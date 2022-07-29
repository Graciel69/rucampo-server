const { matchedData } = require("express-validator");
const { comentariosModel } = require("../models/index");

//Obtener lista de base de datos
const getItems = async (req, res) => {
  try {
    const user = req.user;

    const data = await comentariosModel.findAll();
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

    const data = await comentariosModel.create(body);
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
    const data = await comentariosModel.findAll({ where: { id } });
    res.send(data);

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

const customGetItem = async (req, res) => {
  try {
    const id = req.params.id;

    const data = await comentariosModel.findAll({ where: { inmuebleId: id } });

    res.send(data);

    return data;
  } catch (error) {
    console.log(error);

    return error;
  }
};

// const updateItem = async (req, res) => {
//   try {
//     const body = req.body;
//     const id = req.params.id;

//     const data = await propietariosModel.findOne({ where: { id } });

//     if (data) {
//       await data.update(body);

//       const newData = await propietariosModel.findOne({ where: { id } });

//       res.send(newData);
//     } else {
//       console.log("algo salio mal ");
//     }
//   } catch (error) {
//     console.log(error);

//     return error;
//   }
// };

module.exports = { getItems, createItem, getItem, customGetItem };

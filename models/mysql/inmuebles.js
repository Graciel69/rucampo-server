const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Propietario = require("./propietarios");

const Inmueble = sequelize.define(
  "inmuebles",

  {
    img_url: {
      type: DataTypes.STRING,
    },

    direccion: {
      type: DataTypes.STRING,
    },
    salon: {
      type: DataTypes.STRING,
    },
    piso: {
      type: DataTypes.STRING,
    },
    numero: {
      type: DataTypes.NUMBER,
    },
    propietarioId: {
      type: DataTypes.STRING,
    },
    puerta: {
      type: DataTypes.STRING,
    },
    telefono: {
      type: DataTypes.NUMBER,
    },
    inquilino: {
      type: DataTypes.STRING,
    },
    dormitorio: {
      type: DataTypes.NUMBER,
    },
    valoracion: {
      type: DataTypes.STRING,
    },
    baño: {
      type: DataTypes.NUMBER,
    },
    cocina: {
      type: DataTypes.STRING,
    },
    terraza: {
      type: DataTypes.NUMBER,
    },
    m2: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);

//Modelo persoonalizado

Inmueble.findAllData = function () {
  Inmueble.belongsTo(Propietario, { foreignKey: "propietarioId" });

  return Inmueble.findAll({ include: Propietario });
};

Inmueble.findOne = function (id) {
  Inmueble.belongsTo(Propietario, {
    foreignKey: "propietarioId",
  });

  return Inmueble.findAll({ where: { id }, include: Propietario });
};

module.exports = Inmueble;

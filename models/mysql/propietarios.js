const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Propietario = sequelize.define(
  "propietarios",
  {
    nombre: {
      type: DataTypes.STRING,
    },

    apellido: {
      type: DataTypes.STRING,
    },

    telefono: {
      type: DataTypes.STRING,
    },

    vivienda: {
      type: DataTypes.STRING,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = Propietario;

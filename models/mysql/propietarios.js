const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");
const Inmueble = require("./inmuebles");

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

    viviendaId: {
      type: DataTypes.STRING,
    },
  },

  {
    timestamps: true,
  }
);

Propietario.findAllData = function () {
  // Propietario.belongsTo(Inmueble, { foreignKey: "viviendaId" });

  return Propietario.findAll({ include: Inmueble });
};

Propietario.findOne = function (id) {
  Propietario.belongsTo(Inmueble, {
    foreignKey: "viviendaId",
  });

  return Propietario.findAll({ where: { id }, include: Inmueble });
};

module.exports = Propietario;

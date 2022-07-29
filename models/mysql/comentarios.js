const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

const Comentario = sequelize.define(
  "comentarios",
  {
    inmuebleId: {
      type: DataTypes.INTEGER,
    },
    comentario: {
      type: DataTypes.STRING,
    },
  },

  { timestamps: true }
);

module.exports = Comentario;

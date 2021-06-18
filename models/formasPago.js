const { DataTypes } = require("sequelize");
const sequelize = require("./../config/db");

const FormasPago = sequelize.define(
  "formas_pago",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: "formas_pago",
    timestamps: false, // esto es opcional si crean las columnas created_at y updated_at
  }
);
module.exports = FormasPago;

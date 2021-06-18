const { DataTypes } = require("sequelize");
const sequelize = require("./../config/db");

const Productos = sequelize.define(
  "productos",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.NUMBER,
      allowNull: false,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "productos",
    timestamps: false, // esto es opcional si crean las columnas created_at y updated_at
  }
);
module.exports = Productos;

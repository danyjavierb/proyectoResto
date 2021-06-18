const { DataTypes } = require("sequelize");
const sequelize = require("./../config/db");

const Usuarios = sequelize.define(
  "usuarios",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    correo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false, // esto es opcional si crean las columnas created_at y updated_at
  }
);
module.exports = Usuarios;

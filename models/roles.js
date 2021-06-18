const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Roles = sequelize.define(
  "roles",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "rol",
    timestamps: false, // esto es opcional si crean las columnas created_at y updated_at
  }
);

module.exports = Roles;

const { DataTypes } = require("sequelize");
const sequelize = require("./../config/db");

const Pedidos = sequelize.define(
  "pedidos",
  {
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    precio_total: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM(["nuevo", "confirmado", "finalizado"]),
      allowNull: true,
      defaultValue: "nuevo",
    },
  },
  {
    tableName: "pedidos",
    timestamps: false, // esto es opcional si crean las columnas created_at y updated_at
    underscored: true,
  }
);
module.exports = Pedidos;

const { DataTypes } = require("sequelize");
const sequelize = require("./../config/db");
const Pedidos = require("./pedidos");
const productos = require("./productos");

const PedidosHasProductos = sequelize.define(
  "pedidos_has_productos",
  {
    cantidad: {
      type: DataTypes.NUMBER,
      alloNull: false,
    },
    pedido_id: {
      field: "pedido_id",
      type: DataTypes.NUMBER,
      alloNull: false,
      references: {
        model: Pedidos,
        key: "id",
      },
    },
    producto_id: {
      field: "producto_id",
      type: DataTypes.NUMBER,
      alloNull: false,
      references: {
        model: productos,
        key: "id",
      },
    },
  },
  {
    tableName: "pedidos_has_productos",
    timestamps: false, // esto es opcional si crean las columnas created_at y updated_at
    underscored: true,
  }
);
module.exports = PedidosHasProductos;

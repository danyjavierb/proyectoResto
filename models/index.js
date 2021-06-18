const FormasPago = require("./formasPago");
const Pedidos = require("./pedidos");
const PedidosHasProductos = require("./pedidosHasProductos");
const Productos = require("./productos");
const Roles = require("./roles");
const Usuarios = require("./usuarios");

Usuarios.belongsTo(Roles, {
  foreignKey: "rol_id",
});

Usuarios.hasMany(Pedidos, {
  foreignKey: "usuarios_id",
});

Pedidos.belongsTo(FormasPago, {
  foreignKey: "formas_pago_id",
});

Pedidos.belongsTo(Usuarios, {
  foreignKey: "usuarios_id",
});

// esto es 20% del proyecto
Pedidos.belongsToMany(Productos, {
  through: PedidosHasProductos,
});

module.exports = {
  FormasPago,
  Pedidos,
  PedidosHasProductos,
  Productos,
  Roles,
  Usuarios,
};

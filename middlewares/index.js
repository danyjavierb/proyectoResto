const { Usuarios, Roles } = require("../models");

const useAdmin = async (req, res, next) => {
  const usuarioActual = await Usuarios.findByPk(req.user.id, {
    include: [Roles],
  });
  console.log(usuarioActual.role);
  if (usuarioActual.role.nombre == "admin") {
    next();
  } else {
    res.status(401).json({ error: "ususario debe ser admin " });
  }
};

module.exports = { useAdmin };

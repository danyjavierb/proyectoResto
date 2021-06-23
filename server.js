const express = require("express");
const expressJwt = require("express-jwt");
const jwt = require("jsonwebtoken");
const { useAdmin } = require("./middlewares");

const {
  Pedidos,
  Productos,
  Usuarios,
  FormasPago,
  Roles,
  PedidosHasProductos,
} = require("./models/index");
const { PedidosService } = require("./services");
const app = express();

const APP_PORT = process.env.APP_PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(express.json());

app.use(
  expressJwt({
    secret: JWT_SECRET,
    algorithms: ["HS256"],
  }).unless({ path: ["/login"] })
);

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const posibleUsuario = await Usuarios.findOne({
    attributes: ["id", "nombre", "correo"],
    where: {
      username,
      contrasena: password,
    },
    include: [{ model: Roles }],
  });

  if (posibleUsuario == null) {
    res.status(401).json({ error: "usuario o contrasena incorrecta" });
  } else {
    const token = jwt.sign(
      {
        id: posibleUsuario.id,
        nombre: posibleUsuario.nombre,
        correo: posibleUsuario.correo,
      },
      JWT_SECRET,
      { expiresIn: "60m" }
    );

    res.json({ token });
  }
});

app.post("/pedidos", async (req, res) => {
  const { forma_pago, productos } = req.body;
  const nuevoPedido = await PedidosService.crearPedido(
    forma_pago,
    productos,
    req.user.id
  );

  res.json({ nuevoPedido });
});

app.get("/pedidos/dashboard", useAdmin, async (req, res) => {
  res.status(200);
  const pedidos = await PedidosService.traerPedidos();
  res.json(pedidos);
});

app.listen(APP_PORT, () => {
  console.log(`escuchando en puerto ${APP_PORT}`);
});

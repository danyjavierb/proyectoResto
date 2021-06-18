const express = require("express");
const { Pedidos, Productos, Usuarios, FormasPago } = require("./models/index");
const app = express();

const APP_PORT = process.env.APP_PORT || 3000;

app.use(express.json());

app.get("/pedidosDashboard", async (req, res) => {
  const pedidos = await Pedidos.findAll({
    include: [
      { model: Productos },
      { model: Usuarios, attributes: ["nombre", "direccion"] },
      { model: FormasPago, attributes: ["nombre"] },
    ],
  });

  res.status(200);
  res.json(pedidos);
});

app.listen(APP_PORT, () => {
  console.log(`escuchando en puerto ${APP_PORT}`);
});

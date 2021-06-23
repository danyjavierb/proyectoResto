const {Pedidos,Productos,Usuarios,FormasPago, PedidosHasProductos} = require('./../models')

const PedidosService   =  () => {

    const traerPedidos = async  () => {

     return  await Pedidos.findAll({
        include: [
          { model: Productos },
          { model: Usuarios, attributes: ["nombre", "direccion"] },
          { model: FormasPago, attributes: ["nombre"] },
        ],
      });
    } 

    const crearPedido = async  (forma_pago , productos, user_id) => {
      
          const data_productos = await Promise.all(productos.map( async  prod => {
            const productoDB = await Productos.findByPk(prod.id);
            return {
              cantidad: prod.cantidad,
              precio: productoDB.precio,
              id: productoDB.id
            }
          }))

          const precioTotal = data_productos.reduce((acc,prod)=>{
          return acc+= prod.cantidad* parseFloat(  prod.precio)
          },0)

          const nuevoPedido = await Pedidos.create ({
          fecha: Date.now(),
          precio_total: precioTotal,
          usuarios_id: user_id,
          formas_pago_id: forma_pago
          });


          await Promise.all (data_productos.map (async prod => {

          await PedidosHasProductos.create({
          pedido_id: nuevoPedido.id,
          producto_id: prod.id,
          cantidad: prod.cantidad
          }, {fields : ["pedido_id","producto_id","cantidad"]})
          }))

          return nuevoPedido;

      }

    return  { traerPedidos, crearPedido }

};

module.exports = PedidosService();
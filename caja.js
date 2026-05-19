// caja.js


// ARRAY DE PEDIDOS
let pedidos = [];


// TOTAL ACUMULADO
let totalAcumulado = 0;


// FUNCIÓN AGREGAR PEDIDO
function agregarPedido(producto, precio) {

    let pedido = {
        producto: producto,
        precio: precio
    };

    pedidos.push(pedido);

    totalAcumulado += precio;

    console.log(`
    Pedido agregado:
    ${producto} - $${precio}
    `);

}


// FUNCIÓN MOSTRAR PEDIDOS
function mostrarPedidos() {

    console.log("===== PEDIDOS =====");

    pedidos.forEach((pedido, index) => {

        console.log(`
        ${index + 1}. ${pedido.producto} - $${pedido.precio}
        `);

    });

    console.log(`
    TOTAL ACUMULADO: $${totalAcumulado}
    `);

}


// PRUEBAS
agregarPedido("Hamburguesa", 80);
agregarPedido("Pizza", 120);

mostrarPedidos();
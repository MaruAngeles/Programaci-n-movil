// array de pedidos
let pedidos = [];

let totalAcumulado = 0;


//  pedido
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

    alert(`${producto} agregado al pedido`);

}


// mostrar pedidosa
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

    alert(`Total acumulado: $${totalAcumulado}`);

}
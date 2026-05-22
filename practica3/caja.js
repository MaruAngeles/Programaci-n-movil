// PRODUCTOS DE LA CAFETERIA
const productos = [

    {
        id: 1,
        nombre: "Cafe Latte",
        precio: 65
    },

    {
        id: 2,
        nombre: "Cheesecake",
        precio: 75
    }

];


// ARRAY DE PEDIDOS
let pedidos = [];


// TOTAL ACUMULADO
let totalAcumulado = 0;


// BUSCAR PRODUCTO POR ID
function buscarProducto(id) {

    return productos.find(function(producto) {
        return producto.id === id;
    });

}


// AGREGAR PEDIDO
function crearPedidoCliente(idProducto) {

    let producto = buscarProducto(idProducto);

    if (!producto) {

        console.log("Producto no encontrado.");
        return;

    }

    pedidos.push(producto);

    totalAcumulado += producto.precio;

    console.log("Pedido agregado:");
    console.log(producto.nombre + " - $" + producto.precio);

}


// CALCULAR SUBTOTAL CON REDUCE()
function calcularSubtotal() {

    let subtotal = pedidos.reduce(function(acumulador, pedido) {

        // DESTRUCTURING
        let { precio } = pedido;

        return acumulador + precio;

    }, 0);

    return subtotal;

}


// CALCULAR IVA
function calcularIVA(subtotal) {

    return subtotal * 0.16;

}


// CALCULAR TOTAL
function calcularTotal(subtotal, iva) {

    return subtotal + iva;

}


// MOSTRAR PEDIDOS
function listarPedidosCliente() {

    console.log("\n===== PEDIDOS =====");

    if (pedidos.length === 0) {

        console.log("No hay pedidos.");
        return;

    }

    pedidos.forEach(function(pedido, index) {

        // DESTRUCTURING
        let { nombre, precio } = pedido;

        console.log(
            (index + 1) +
            ". " +
            nombre +
            " - $" +
            precio
        );

    });

    let subtotal = calcularSubtotal();

    let iva = calcularIVA(subtotal);

    let total = calcularTotal(subtotal, iva);

    console.log("\nSubtotal: $" + subtotal);
    console.log("IVA: $" + iva);
    console.log("TOTAL: $" + total);

}


// PRUEBAS
crearPedidoCliente(1);

crearPedidoCliente(2);

listarPedidosCliente();
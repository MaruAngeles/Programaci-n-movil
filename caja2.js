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
    },

    {
        id: 3,
        nombre: "Frappé",
        precio: 80
    }

];


// ARRAY DE PEDIDOS
let pedidos = [];


// TOTAL ACUMULADO
let totalAcumulado = 0;


// HERRAMIENTA PARA LEER DATOS EN CONSOLA
const readline = require("node:readline/promises");

const consola = readline.createInterface({

    input: process.stdin,
    output: process.stdout

});


// MOSTRAR PRODUCTOS
function mostrarProductos() {

    console.log("\n===== MENU =====");

    productos.forEach(function(producto) {

        console.log(
            producto.id +
            ". " +
            producto.nombre +
            " - $" +
            producto.precio
        );

    });

}


// BUSCAR PRODUCTO POR ID
function buscarProducto(id) {

    return productos.find(function(producto) {

        return producto.id === id;

    });

}


// FUNCION agregarPedido()
function agregarPedido(idProducto) {

    let producto = buscarProducto(idProducto);

    if (!producto) {

        console.log("Producto no encontrado.");
        return;

    }

    pedidos.push(producto);

    totalAcumulado += producto.precio;

    console.log("\nPedido agregado:");
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


// INICIAR PROGRAMA
async function iniciarCaja() {

    let continuar = "si";

    while (continuar === "si") {

        mostrarProductos();

        let opcion = await consola.question(
            "\nEscribe el ID del producto que quieres agregar: "
        );

        agregarPedido(Number(opcion));

        continuar = await consola.question(
            "\nQuieres agregar otro producto? (si/no): "
        );

        continuar = continuar.toLowerCase();

    }

    listarPedidosCliente();

    consola.close();

}


iniciarCaja();
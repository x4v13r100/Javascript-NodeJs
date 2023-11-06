/**
 * Manipulacion de Arreglos
 *   reduce => parte 3
 */

// Saber el total de ventas por producto

let ventas = [
    {
        nombre: "camisa",
        precio: 21,
        cantidad_vendido: 10
    },
    {
        nombre: "pantalon",
        precio: 32,
        cantidad_vendido: 15
    },
    {
        nombre: "zapatos",
        precio: 43,
        cantidad_vendido: 20
    },
    {
        nombre: "sudadera",
        precio: 54,
        cantidad_vendido: 25
    }

]

let total_ventas = ventas.reduce((acumulador,venta) => {
    let venta_producto = venta.precio * venta.cantidad_vendido;
    acumulador[venta.nombre] = venta_producto;
    return acumulador;
}, {});

console.log(total_ventas);



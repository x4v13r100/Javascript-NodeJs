/**
 * Manipulacion de Arreglos
 *  map => es una funcion inmutable
 *  que nos permite transformar un array
 */

let estudiantes = ["Javier", "Pedro", "Maria", "Luis"];


let nombres = estudiantes.map((nombre) => `${nombre}.`);

let asistencia = estudiantes.map((nombre) => {
    return {
        nombre: nombre,
        asistencia: false
    }
})

console.log(asistencia);
console.log(nombres);


///////////////////////////////////////////////////////////////////////////////////


var productos = [
    {
        nombre: "Arroz",
        precio: 1000
    },
    {
        nombre: "Leche",
        precio: 2000
    },
    {
        nombre: "Pan",
        precio: 3000
    }
]

var productosImpuestos = productos.map((producto) => {
    
    return {
        ...producto,   //* spread operator => es una forma de clonar las propiedades de un objeto
        impuestos: 0.19

    }
})

var precios = productosImpuestos.map((producto) => {
    return {
        ...producto,
        total: producto.precio * producto.impuestos
    }
})
console.log(productos);
console.log(productosImpuestos);
console.log(precios);






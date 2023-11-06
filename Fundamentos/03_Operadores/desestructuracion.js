/**
 * Operadores de Desestructuracion para objetos
 */

let persona = {
    nombre: "Javier",
    apellido: "Mercado"
}

let { nombre: nombre_persona, apellido: apellido_persona } = persona; 
//obtener una propiedad especifica de un objeto con la clave, sin afectar el objecto original
// con : asignamos el valor a una variable
console.log(nombre_persona);

/**
 * Operadores de Desestructuracion para arrays
 */

let numeros = [1, 2, 3, 4, 5];

let [cero, uno, dos, tres, cuatro] = numeros;
//obtener una propiedad especifica de un array con la posicion del arreglo,
console.log(uno);

/**
 * Operadores de miembro o acceso a propiedades
 */

// Notacion punto
let otra_persona = {
    nombre: "Jazmin",
    apellido: "Andrade"
}
console.log(otra_persona.nombre);// Entramos a la propiedad nombre del objeto con .

// Notacion corchetes
let persona2 = {
    nombre: "Jazmin",
    apellido: "Andrade"
}
console.log(persona2['nombre']);// Entramos a la propiedad nombre del objeto con []

// Notacion corchetes para arrays
let numeros2 = [1, 2, 3, 4, 5];
console.log(numeros2[1]); // Entramos a la posicion del array

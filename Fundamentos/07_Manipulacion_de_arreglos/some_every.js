/**
 * Manipulacion de Arreglos
 *   some =>  Se encarga de verificar dentro de un arreglo
 *            si un elemento cumple una condicion devuelve un valor logico.
 *   every => Se encarga de verificar dentro de un arreglo si todos los elementos
 *            cumple una condicion.
 */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//some
let par = numeros.some((numero) => {
    return numero % 2 == 0;
})
console.log(par);  // some devuelve true, si un numero del array es numero par


//every
let impar = numeros.every((numero) => {
    return numero % 2 != 0;
})

console.log(impar) // every devuelve true, si todos los numeros del array son impares
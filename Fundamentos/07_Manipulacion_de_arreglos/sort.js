/**
 * Manipulacion de Arreglos
 *   sort => es una funcion mutable
 *   que nos permite ordenar un array, en base al codigo ASCII
 */

let letras = ["z","y", "x", "w", "v", "u", "t", "s", "r", "q", "p", "o", "n", "m", "l", "k", "j", "i", "h", "g", "f", "e", "d", "c", "b", "a"];

console.log(letras.sort());

var numero_desordenado = [1,1000,21,30,7];
var ordenado =numero_desordenado.sort((a,b) => { // sort recibe una funcion con dos argumentos a y b para comparar los elementos 
    return a-b;
})
console.log(ordenado);
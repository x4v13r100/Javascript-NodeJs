/**
 * Manipulacion de Arreglos
 *  inmutable
 *   slice => Devuelve una copia, parte de un arreglo
 */

let letras = ["a", "b", "c", "d", "e", "f"];

var copia = letras.slice(2, 4); // parametros: posicion de inicio y fin a extraer, ultima posicion no se incluye
console.log(copia);
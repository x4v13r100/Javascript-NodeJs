/**
 * Manipulacion de Arreglos
 *   includes => Ayuda a determina si existe un elemento en especifico dentro de un arreglo
 *              devuelve un valor logico
 */

let mascotas = ["perro", "gato", "loro", "conejo"];

let existe = mascotas.includes("tiburon");  // No recibe una funcion como parametro

console.log(existe);

console.log('Javier'.includes('a')); // Si el string contiene la letra 'a' retorna true
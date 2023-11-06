/**
 * Manipulacion de Arreglos
 *   mutable
 *   splice => ayuda a eliminar o modificar elementos de un arreglo
 */

var nombres = ["Javier", "Pedro", "Maria", "Luis", "Carlos"];


// primero parametro: indice de inicio a modificar o eliminar
nombres.splice(1);  
console.log(nombres); 

// segundo parametro: cantidad de elementos a eliminar
nombres.splice(1, 1);
console.log(nombres);

//tercer parametro: elementos a insertar
nombres.splice(1, 1, "Lewis");
console.log(nombres);
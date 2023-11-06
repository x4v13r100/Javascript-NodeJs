/**
 * Manipulacion de Arreglos
 *  forEach => recorrer el arreglo
 */

let letras = ["a", "b", "c", "d", "e", "f"];
//console.log(letras.length); // usamos length para saber la cantidad de elementos del arreglo

//metodo for
for (let i = 0; i < letras.length; i++) { // usamos length para limitar el rango
    console.log(letras[i]);
}

//metodo funcion arrows forEach 
letras.forEach(element => { 
    console.log(element);
 });



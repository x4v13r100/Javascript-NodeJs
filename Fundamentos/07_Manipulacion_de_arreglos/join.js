/**
 * Manipulacion de Arreglos
 *  join => Nos ayuda a generar una cadena de caracteres y nos permite unir elementos de un arreglo
 */

let letras = ["a", "b", "c", "d", "e", "f"];

console.log(letras.join("--"));  // Concatena los elementos de un arreglo con un separador, agregado en el parametro

/**
 *  Usar join para generar un csv en un array de objetos
 */
let estudiantes = [
    {
        nombre: "Javier",
        edad: 21,
        matriculado: true
    },
    {
        nombre: "Pedro",
        edad: 22,
        matriculado: false
    },
    {
        nombre: "Maria",
        edad: 23,
        matriculado: true
    },
    {
        nombre: "Luis",
        edad: 24,
        matriculado: false
    },
    {
        nombre: "Carlos",
        edad: 25,
        matriculado: true
    }

]

var csv_generator = (array, separador = ',') => {
   let headers = Object.keys(array[0]).join(separador) // Object.keys() => nos permite extraer las claves de un objeto
   
   let data = array.map((elemento) => {
       return Object.values(elemento).join(separador) // Object.values() => nos permite extraer los valores de un objeto
   })
   
   console.log(headers);
   data.forEach(element => console.log(element))
}

csv_generator(estudiantes);
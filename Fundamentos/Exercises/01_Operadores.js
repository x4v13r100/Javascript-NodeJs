/**
 * Ejercicios Operadores.
 */

// 1. Escribir un programa que calcule el número de segundos que existen en un día.
// Para ello debemos multiplicar los segundos de un minuto, por los minutos de
// una hora, por las horas de un día. Como todo el mundo sabe, un día tiene 86400 segundos.

let second_minut = 60;
let minuto_hour = 60;
let hour_day = 24;
let seconds = second_minut * minuto_hour * hour_day;
console.log(seconds);

// 2. Realiza un programa que a partir de los valores ancho=2 y alto=5,
// calcule el área de un rectángulo.

var ancho = 2;
var alto = 5;
var rectángulo = ancho * alto;
console.log(rectángulo);


// 3. Hacer un conversor de grados centígrados a grados Fahrenheit.
// Para ello deberé multiplicar por 9/5 y sumar 32.
// Como todo el mundo sabe, 20 grados centígrados son 68 grados Fahrenheit.

let centigrados = 20;
let Fahrenheit = centigrados * 9 / 5 + 32;
console.log(Fahrenheit);

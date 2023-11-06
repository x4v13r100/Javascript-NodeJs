/**
 * Funciones
 * Funcion flecha
 * Alternativa para compactar una funcion de funcion
 */

const sumar = (a, b) => { // Se almacena en una variable
    if (typeof a === 'number' && typeof b === 'number') { // Se verifica que los argumentos sean numericos
        return a + b
    }else{
        throw new Error('Los argumentos deben ser numericos')
    }
}
console.log(sumar(4,'2'));


const restar = (a, b) => a - b; // => significa return implicito

console.log(restar(5, 2));
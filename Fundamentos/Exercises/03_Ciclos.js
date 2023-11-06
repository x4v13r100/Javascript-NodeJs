/**
 * Ejercicios Ciclos

  1.Imprima las tablas de multiplicar del 2 al 12 utilizando la declaración for.
    Pista: anidamiento.

 */


for (let i = 2; i <= 12; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 12; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


/**
 *  2.Realice el equivalente con la declaración while y do-while
 */

let i = 2;

while (i <= 12) {
    console.log(`Tabla del ${i}`);
    console.log(`${i} x ${i} = ${i * i}`);
    i++;
}
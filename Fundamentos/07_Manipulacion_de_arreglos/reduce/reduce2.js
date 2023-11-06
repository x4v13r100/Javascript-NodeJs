/**
 * Manipulacion de Arreglos
 *   reduce => parte 2
 */
//cuantas personas hay con la misma edad?

let edades = [21,23,45,18,19,33,23,43,21,45,33,22,33,44,55,66,77,88,99];

var resultado = edades.reduce((acumulador, edad) => {
    if(acumulador[edad]){
        acumulador[edad] += 1
    }else{
        acumulador[edad] = 1
    }
    return acumulador
}, {})

console.log(resultado);

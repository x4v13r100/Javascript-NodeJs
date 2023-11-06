/**
 * Manipulacion de Arreglos
 *  reduce => es una funcion mutable
 *  que nos permite reducir un array a un solo valor,
 *  recibe 2 parametros
 *  (() => {}, 0) 
 *  funcion y valor o estructura inicial a retornar 
 *  pendiente al valor que quieres acumular o retornar
 * 
 */

let estudiantes = [
    {
        nombre: "Javier",
        edad: 21,
        notas: [10, 9, 8, 7]
    },
    {
        nombre: "Pedro",
        edad: 22,
        notas: [9, 8, 7, 6]
    },
    {
        nombre: "Maria",
        edad: 23,
        notas: [8, 7, 6, 5]
    },
    {
        nombre: "Luis",
        edad: 24,
        notas: [7, 6, 5, 4]
    },
    {
        nombre: "Carlos",
        edad: 25,
        notas: [6, 5, 4, 3]
    }
];

let nota_general = estudiantes.map((estudiante) => {
    let nota_promedio = estudiante.notas.reduce((acumulador, nota) => {
        let cantidad_notas = estudiante.notas.length;
        var promedio = acumulador + nota / cantidad_notas;
        return promedio
    },0);

    return {
        nombre: estudiante.nombre,
        nota_promedio: nota_promedio
    }

})

console.log(nota_general);

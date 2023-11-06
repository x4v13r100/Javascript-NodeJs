/**
 * Manipulacion de Arreglos
 *  encadenar map y reduce 
 */

//cantidad de estudiantes matriculados y no matriculados

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

let resultado = estudiantes
    .map((estudiante) => { return estudiante.matriculado })
    .reduce((acum, item) => {
        if (item) {
            acum.matriculado += 1
        } else {
            acum.no_matriculado += 1
        }
        return acum                            // no olvidar retornar el acumulador
    }, { matriculado : 0, no_matriculado : 0 });

console.log(resultado);
/**
 * Manipulacion de Arreglos
 *  filter => Filtrado de arreglos, metodo inmutable (no modifica el arreglo de origen)
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

let matriculado = estudiantes.filter((estudiante) => { // filter retorna un nuevo arreglo sin modificar el original
    return estudiante.matriculado === true && estudiante.edad > 21
})

console.log(matriculado);




/**
 * Manipulacion de Arreglos 
 *   inmutable
 *   find => Se encarga de buscar un elemento dentro de un arreglo y retornar su valor
 *   findIndex => Se encarga de buscar un elemento dentro de un arreglo y retornar su indice o posicion dentro del arreglo
 */

let clientes = [
    {
        id: 1,
        nombre: "Javier",
        tipo_cliente: "premium"
    },
    {
        id: 2,
        nombre: "Pedro",
        tipo_cliente: "basic"
    },
    {
        id: 3,
        nombre: "Maria",
        tipo_cliente: "lite"
    },
    {
        id: 4,
        nombre: "Luis",
        tipo_cliente: "test"
    },
    {
        id: 5,
        nombre: "Carlos",
        tipo_cliente: "premium"
    }
]

let user_premium = clientes.find((cliente) => { //find solo retorna el primer elemento que contenga la condicion
    return cliente.tipo_cliente === "premium"
})

let user_lite_position = clientes.findIndex((cliente) => { //findIndex retorna la posicion
    return cliente.tipo_cliente === "lite"
})

console.log(user_premium);
console.log(user_lite_position);
/**
 * Manipulacion de Arreglos
 *  Encadenar filter y includes
 */

// crear funcion para filtrar y buscar usando includes

let buscador = (i) => {
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
    
    return clientes.filter((cliente) => {
        return cliente.tipo_cliente.includes(i)
    })
}

console.log(buscador('premium'));
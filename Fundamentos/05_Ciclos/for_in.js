/**
 * Ciclos
 * for in
 * Itera o recorrer las propiedades de un objeto -  Objeto no es iterable
 */


let persona = {
    nombre: "Javier",
    apellido: "Mercado",
    edad: 21,
    direccion: {
        calle: "Calle falsa",
        numero: 123
    }
}
//obj toma las propiedades del objeto-> obje[key]
for (let key in persona) {
    console.log(key, persona[key]);
}
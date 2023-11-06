/**
 * Ejercicios Control de Flujos
*/
// 1.Escribir un programa que según el día de la semana ingresado proporcione el día en inglés.
// El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch

let dia = "lunes";
if(dia === "lunes"){
    console.log("Monday");
}else if(dia === "martes"){
    console.log("Tuesday");
}else if(dia === "miercoles"){
    console.log("Wednesday");
}else if(dia === "jueves"){
    console.log("Thursday");
}else if(dia === "viernes"){
    console.log("Friday");
}else if(dia === "sabado"){
    console.log("Saturday");
}else if(dia === "domingo"){
    console.log("Sunday");
}else{
    console.log("No es un dia de la semana");
}

switch(dia){
    case "lunes":
        console.log("Monday");
        break;
    case "martes":
        console.log("Tuesday");
        break;
    case "miercoles":
        console.log("Wednesday");
        break;
    case "jueves":
        console.log("Thursday");
        break;
    case "viernes":
        console.log("Friday");
        break;
    case "sabado":
        console.log("Saturday");
        break;
    case "domingo":
        console.log("Sunday");
        break;
    default:
        console.log("No es un dia de la semana");    
}

// 2.Escribir un programa que según el total de la compra, se agregue un valor de envio.
// Si la compra es menor o igual a los $10 se agregará un gasto de envió de $3
// Si la compra es menor o igual a los $20 y mayor a los $10 se agregará un gasto de envío de $5
// Si la compra es menor o igual a los $50 y mayor a los $20 se agregará un gasto de envío de $7
// Si la compra supera los $50 el gasto de envío será gratuito
// El programa debe ser escrito dos veces, una con la declaración if else y otra con la declaración switch

var compra = 50;

if(compra <= 10){
    console.log("El gasto de envio es de $3");
}else if(compra <= 20 && compra > 10){
    console.log("El gasto de envio es de $5");
}else if(compra <= 50 && compra > 20){
    console.log("El gasto de envio es de $7");
}else if(compra > 50){
    console.log("El gasto de envio es gratis");
}else{
    console.log("No esta en el rango de compras");
}

let  compra = 50;
let gastosEnvio = 0;

switch(true){
    case (compra <= 10):
        gastosEnvio = 3;
        break;
    case (compra <= 20 && compra > 10):
        gastosEnvio = 5;
        break;
    case (compra <= 50 && compra > 20):
        gastosEnvio = 7;
        break;
    case (compra > 50):
        gastosEnvio = 'gratis';
        break;
    default:
        gastosEnvio = "No esta en el rango de compras";
}

console.log("El gasto de envio es de $" + gastosEnvio);

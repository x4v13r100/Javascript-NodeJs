/**
 * Control de flujo
 */

//IF, ELSE, ELSE IF
let numero = 10;

if (numero > 0) { // se ejecuta si se cumple la condicion booleana
    console.log("El numero es mayor a cero");
}

const MAYOR_DE_EDAD = 18;
const ANCIANO = 90;

let edad_usuario = 117;

if(edad_usuario >= MAYOR_DE_EDAD && edad_usuario < ANCIANO){
    console.log("Es mayor de edad");
}else if(edad_usuario >= ANCIANO){
    console.log("Es anciano");
}else{
    console.log("Es menor de edad");
}
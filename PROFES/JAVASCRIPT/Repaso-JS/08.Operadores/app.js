// ternario

const age = 15;

let status = age >= 18 ? "Mayo de edad" : "Menor de edad";

console.log(status);

//OPERADORES LÓGICOS

//Y - && -- cumplir ambas condiciones

const tengoCoche = false;
const tengoCarnet = true;

const puedoConducir = tengoCoche && tengoCarnet;
console.log(puedoConducir);

//O - || -- ha de cumplirse una u otra

const soyMayorDeEdad = true;
const tengoDinero = false;

const puedoSalirDeCervezas = soyMayorDeEdad || tengoDinero;

console.log(puedoSalirDeCervezas);

//no - !

const trueNot = !true;

console.log(trueNot);

const falseNot = !false;

console.log(falseNot);

//Operadores de asignación =

let myNumber = 5;

//Operadores de igualdad ==

console.log(myNumber == "5");

//Operadores de igualdad estricta === ->compara el tipo

console.log(myNumber === "5");

//Operador de adición

console.log((myNumber += 1));

//Operador de sustración
console.log((myNumber -= 1));

//Operador de multiplicación
console.log((myNumber *= 1));

//Operador de división
console.log((myNumber /= 1));

//Operador de modulo o RESTO
console.log((myNumber %= 2));

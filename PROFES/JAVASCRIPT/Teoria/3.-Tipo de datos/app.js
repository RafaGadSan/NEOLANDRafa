/// 1) Boolean

let verdadero = true;
let falso = false;

// 2) String

let exampleString = " esto es string ";

console.log(exampleString[4]);

// 3) Null

let nomina = null;

// 4) Undefined
let car = undefined;

// 5) Number
let age = 30;

// 6) object

//! -------> Object Object
const profe = {
  name: " Pedro",
  apellidos: "Lerida",
};

//! -------> Object Array

const arrayExample = [1, 2, 3, 4, 32, 233];

const largo = arrayExample.length; // aqui daria 6 no confundir con la posicion del array que empieza por 0

//! CONCEPTOS CLAVES DE LA MEZCLA DE DATO/*style*/`

let name = "Pedro";
name + 1; // -----> me saldria Pedro1 ---> convierte el numbre en string

let random = 1234214;
console.log(random + 6 + "Hola" + 2355); //------->1234220Hola2355

//------------------------ES6 ------------------------

const templateString = `Hola esto es una prueba de template string, me llamo ${name}`;
const h1Custom = `<p>${name}</p>`;
console.log(templateString);

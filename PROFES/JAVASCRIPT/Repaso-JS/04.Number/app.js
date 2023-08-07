//Convierte a numero a entero
console.log(parseInt("9734736496"));
console.log(parseInt("9734736496.873549623965"));

console.log("-----------------------------");
//Devuelve un boolean
console.log(isNaN("María"));
console.log(isNaN(874676594));

console.log("-----------------------------");
// isInteger devuelve un boolean
console.log(Number.isInteger(7.28966)); // --> Número entero es el que no tiene decimales
console.log(Number.isInteger(1));

console.log("-----------------------------");
//Convierte a número decimal
console.log(parseFloat(755843.4345));
console.log(parseFloat("46934765.84765"));
console.log(parseFloat("46934765"));

console.log("-----------------------------");
const otherNumber = 3435443; // --> "3435443"
console.log(otherNumber.toString());

console.log(otherNumber.toString(2)); // --> convierte a binario
console.log(otherNumber.toString(16)); // --> Hexadecimal

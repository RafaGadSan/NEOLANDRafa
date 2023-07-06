/*Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array
 - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición
  de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:*/
const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];
let nombreComprobar = "Peggy";
function finderName(array, nombre) {
  let comprobador = false;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    array[i] == nombre && ((comprobador = true), (index = i));
  }
  return comprobador == false ? false : (true, index);
}
console.log(`${finderName(nameFinder, nombreComprobar)}`);

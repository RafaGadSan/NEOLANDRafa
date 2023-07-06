//Completa la función que tomando dos números como argumento devuelva el más alto.
function sum(numberOne, numberTwo) {
  //?Opcion 1 usando Math
  //return Math.max(numberOne, numberTwo);
  //?Opcion 2 usando ternario
  return numberOne > numberTwo ? numberOne : numberTwo;
}
console.log(`El valor maximo es: ${sum(1, 5)}`);

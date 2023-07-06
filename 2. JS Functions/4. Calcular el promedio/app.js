/*Calcular un promedio es una tarea extremadamente común.
 Puedes usar este array para probar tu función:*/

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let sum = 0;
  param.forEach((element) => (sum += element));
  let media = sum / param.length;
  return media;
}
console.log(`La media es ${average(numbers)}`);

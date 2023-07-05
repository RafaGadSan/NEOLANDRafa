/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados,
 en caso que existan los elimina para retornar un array sin los elementos duplicados.
 Puedes usar este array para probar tu función: */

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];
function removeDuplicates(param) {
  // Entiendo que tiene que devolver un array sin modificar el original
  let newParam = param;
  for (let i = 0; i < newParam.length; i++) {
    const element = newParam[i];
    for (let j = i + 1; j < newParam.length; j++) {
      const segundoElement = newParam[j];
      newParam[i] == newParam[j] && newParam.splice(j, 1);
    }
  }
  return newParam;
}
console.log(
  `El array original es ${duplicates} y el array sin duplicados es ${removeDuplicates(
    duplicates
  )}`
);

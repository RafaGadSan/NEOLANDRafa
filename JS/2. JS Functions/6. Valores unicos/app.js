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
  let nuevoArray = [];
  //primero clonamos el array para no sobreescribir el original.
  for (h = 0; h < param.length; h++) {
    nuevoArray[h] = param[h];
  }
  for (let i = 0; i < nuevoArray.length; i++) {
    const element = nuevoArray[i];
    for (let j = i + 1; j < nuevoArray.length; j++) {
      const segundoElement = nuevoArray[j];
      nuevoArray[i] === nuevoArray[j] && nuevoArray.splice(j, 1);
    }
  }
  return nuevoArray;
}

console.log(
  `El array original es ${duplicates} y el array sin duplicados es ${removeDuplicates(
    duplicates
  )}`
);

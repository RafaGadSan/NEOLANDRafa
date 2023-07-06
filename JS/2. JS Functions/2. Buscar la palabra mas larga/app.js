/*Completa la función que tomando un array de strings como argumento devuelva el más largo,
 en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función:*/

const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(param) {
  let posicion = 0;
  let longitud = 0;
  for (let index = 0; index < param.length; index++) {
    if (param[index].length > longitud) {
      longitud = param[index].length;
      posicion = index;
    }
  }
  console.log(`La palabra más larga del array es ${param[posicion]}`);
}
findLongestWord(avengers);

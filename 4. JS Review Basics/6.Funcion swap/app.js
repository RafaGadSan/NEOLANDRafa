/*Crea una función llamada `swap()` que reciba un array y dos parametros que sean
 indices del array. La función deberá intercambiar la posición de los valores de 
 los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:*/

const jugadores = [
  "Mesirve",
  "Cristiano Romualdo",
  "Fernando Muralla",
  "Ronalguiño",
];

const swap = (array, indice1, indice2) => {
  let palabra1;
  let palabra2;
  array.forEach((element, index) => {
    index == indice1 && (palabra1 = element);
    index == indice2 && (palabra2 = element);
  });

  array[indice2] = palabra1;
  array[indice1] = palabra2;

  return array;
};
console.log(`El array original es ${jugadores}`);
console.log(`El array intercambiado es ${swap(jugadores, 1, 2)}`);

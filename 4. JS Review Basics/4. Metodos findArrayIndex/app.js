//Crea una función llamada `findArrayIndex` que reciba como parametros
// un array de textos y un texto y devuelve la posición del array
// cuando el valor del array sea igual al valor del texto que enviaste
// como parametro. Haz varios ejemplos y compruebalos.

//Sugerencia de función:
const palabras = ["Caracol", "Mosquito", "Salamandra", "Ajolote"];

const findArrayIndex = (array, text) => {
  array.includes(text) == false
    ? console.log(`La palabra ${text} no se encuentra en el array.`)
    : array.forEach((element, index) => {
        element == text &&
          console.log(
            `La palabra ${text} se encuentra en la posicion ${index} del array`
          );
      });
};

findArrayIndex(palabras, "Mosquito");

findArrayIndex(palabras, "Rata");

findArrayIndex(palabras, "Pez");

findArrayIndex(palabras, "Ajolote");

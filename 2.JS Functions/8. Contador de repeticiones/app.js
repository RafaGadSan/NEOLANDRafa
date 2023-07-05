/*Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.
  Puedes usar este array para probar tu función:*/
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];
//probando funciones arrow
const repeatCounter = (paramArray) => {
  const newArray = [];
  paramArray.forEach((element) => {
    let contador = 0;
    paramArray.forEach((element2, indice) => {
      element2 === element && contador++;
    });
    /*le pongo el -1 al contador porque te pide el número de veces que se repite,
     no el número de veces que aparece la palabra.
    Utilizo el método some de la clase Array, que lo que hace es devolver un boolean, en función
    de si se cumple la condición que tú le has puesto
    Si se da el caso de que no hay ese elemento en el array (cuando el some da false) entonces 
    pusheamos el objeto en el array. Así nos ahorramos tener objetos repetidos y que nos muestre una lista reiterada*/
    newArray.some((x) => x.name === element) === false &&
      newArray.push({ name: element, contador: contador - 1 });
  });

  newArray.forEach((element) => {
    //Aquí ya me hice una paja mental para que se mostrara bien XD
    //Hago un ternario para comprobar si la palabra en cuestión no se repite, en caso contrario, hago otro ternario dentro
    //de éste, donde compruebo si se repite 1 o más veces.
    console.log(
      `La palabra ${element.name} ${
        element.contador === 0
          ? "no se repite."
          : element.contador > 1
          ? "se repite " + element.contador + " veces."
          : "se repite " + element.contador + " vez."
      } `
    );
  });
};
repeatCounter(counterWords);

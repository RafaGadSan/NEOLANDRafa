//!------------------------------4.1---------------------------------
console.log("----------------------------4.1-------------------------------");
//4.1 Dado el siguiente array, devuelve un array con sus nombres
//utilizando .map().
const users1 = [
  { id1: 1, name1: "Abel" },
  { id1: 2, name1: "Julia" },
  { id1: 3, name1: "Pedro" },
  { id1: 4, name1: "Amanda" },
];
const nombres1 = users1.map((nombres1) => nombres1.name1);
console.log(nombres1);

//!------------------------------4.2---------------------------------
console.log("----------------------------4.2-------------------------------");
// 4.2 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
// empiece por 'A'.
const users2 = [
  { id2: 1, name2: "Abel" },
  { id2: 2, name2: "Julia" },
  { id2: 3, name2: "Pedro" },
  { id2: 4, name2: "Amanda" },
];
const nombres2 = users2.map((nombres2) =>
  //Comparamos en el mapeado que la primera letra del string (poniendo [0] sea A y hacemos ternario.)
  nombres2.name2[0] == "A"
    ? (nombres2.name2 = "Anacleto")
    : (nombres2.name2 = nombres2.name2)
);
//?la forma larga de hacerlo es la de abajo.
// nombres2.forEach((element, index) => {
//   element[0] == "A" && (nombres2[index] = "Anacleto");
// });
console.log(nombres2);

//!------------------------------4.3---------------------------------
console.log("----------------------------4.3-------------------------------");
// 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
// de la propiedad .name y añade al valor de .name el string ' (Visitado)'
// cuando el valor de la propiedad isVisited = true.
const cities = [
  { isVisited: true, name3: "Tokyo" },
  { isVisited: false, name3: "Madagascar" },
  { isVisited: true, name3: "Amsterdam" },
  { isVisited: false, name3: "Seul" },
];

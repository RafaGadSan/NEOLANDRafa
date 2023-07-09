//!------------------------7.1------------------------
console.log("\n------------------------7.1------------------------");
// 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
// los alumnos usando la función .reduce().

const exams = [
  { name: "Yuyu Cabeza Crack", score: 5 },
  { name: "Maria Aranda Jimenez", score: 1 },
  { name: "Cristóbal Martínez Lorenzo", score: 6 },
  { name: "Mercedez Regrera Brito", score: 7 },
  { name: "Pamela Anderson", score: 3 },
  { name: "Enrique Perez Lijó", score: 6 },
  { name: "Pedro Benitez Pacheco", score: 8 },
  { name: "Ayumi Hamasaki", score: 4 },
  { name: "Robert Kiyosaki", score: 2 },
  { name: "Keanu Reeves", score: 10 },
];

// let sumaNotas = exams.reduce(function (accumulator, examen) {
//   return accumulator + examen.score;
// }, 0);

//otra notación usando arrow.

let sumaNotas = exams.reduce(
  (sumaTotal, examen) => sumaTotal + examen.score,
  0
);
console.log(`La suma de las notas totales es de ${sumaNotas}`);

//!------------------------7.2------------------------
console.log("\n------------------------7.2------------------------");
// 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
// alumnos que esten aprobados usando la función .reduce().

let sumaNotasAprobadas = exams.reduce(
  (sumaTotal, examen) =>
    examen.score >= 5 ? sumaTotal + examen.score : sumaTotal,
  0
);
console.log(`La suma de las notas aprobadas es de ${sumaNotasAprobadas}`);

//!------------------------7.3------------------------
console.log("\n------------------------7.3------------------------");
// 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().

let mediaNotas = exams.reduce(
  (accumulator, user) =>
    //Si abro llaves para meter varias líneas, tengo que poner return.
    //Return solo se omite cuando es una arrow monolínea(sin llaves).
    (accumulator += user.score),
  0
);
console.log(`La media de las notas es de ${mediaNotas / exams.length}`);

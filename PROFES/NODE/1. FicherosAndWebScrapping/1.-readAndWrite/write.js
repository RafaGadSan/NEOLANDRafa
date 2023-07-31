console.log("HOLA");
const fs = require("fs");

const movie = [
  {
    title: "Infinity pool",
    year: 2023,
    availables: false,
  },
  {
    title: "dora",
    year: 2020,
    availables: true,
  },
  {
    title: "Infinity world",
    year: 2019,
    availables: true,
  },
];

// añadir una clave nueva view: false a los objetos

const newObjectMovie = movie.map((element) => ({
  ...element,
  view: false,
}));
console.log(
  "🚀 ~ file: write.js:28 ~ newObjectMovie ~ newObjectMovie:",
  newObjectMovie
);

// convertir esto a texto plano porque fs lee y escribe texto

const movieToString = JSON.stringify(newObjectMovie);

// vamos a escribir el archivo con flex-shrink:
fs.writeFile("movie.json", movieToString, () => {
  console.log("archivo escrito 👀");
});

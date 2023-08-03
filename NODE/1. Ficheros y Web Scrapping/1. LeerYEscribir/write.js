const { log } = require("console");
const fs = require("fs");

fs.writeFile;

const videojuegos = [
  {
    nombre: "The Legend of Zelda: Breath of the Wild",
    plataforma: "Nintendo Switch",
    genero: "Aventura",
    lanzamiento: 2017,
  },
  {
    nombre: "God of War",
    plataforma: "PlayStation 4",
    genero: "Acción y aventura",
    lanzamiento: 2018,
  },
  {
    nombre: "Fortnite",
    plataforma: "PC, consolas y móviles",
    genero: "Battle Royale",
    lanzamiento: 2017,
  },
  {
    nombre: "Overwatch",
    plataforma: "PC, PlayStation, Xbox",
    genero: "FPS (First-Person Shooter)",
    lanzamiento: 2016,
  },
  {
    nombre: "Super Mario Odyssey",
    plataforma: "Nintendo Switch",
    genero: "Plataformas",
    lanzamiento: 2017,
  },
];
const juegosJson = JSON.stringify(videojuegos);

fs.writeFile("juegos.json", juegosJson, () => {
  console.log("json creado");
});

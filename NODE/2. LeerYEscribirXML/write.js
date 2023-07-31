const fs = require("fs");
const { XMLBuilder } = require("fast-xml-parser");
const anime = {
  listadoAnimes: {
    animes: [
      {
        nombre: "Naruto",
        genero: ["Acción", "Aventura", "Fantasía"],
        estudio: "Pierrot",
        year: 2002,
      },
      {
        nombre: "One Piece",
        genero: ["Acción", "Aventura", "Comedia"],
        estudio: "Toei Animation",
        year: 1999,
      },
      {
        nombre: "Attack on Titan",
        genero: ["Acción", "Drama", "Fantasía"],
        estudio: "Wit Studio",
        year: 2013,
      },
      {
        nombre: "My Hero Academia",
        genero: ["Acción", "Escolar", "Superpoderes"],
        estudio: "Bones",
        year: 2016,
      },
      {
        nombre: "Death Note",
        genero: ["Sobrenatural", "Thriller", "Misterio"],
        estudio: "Madhouse",
        year: 2006,
      },
    ],
  },
};

let options = {
  ignoreAtributes: false,
  format: true,
};

const builder = new XMLBuilder(options);
let output = builder.build(anime);

fs.writeFile("listadoAnimes.xml", output, () => {
  console.log("escrito");
});

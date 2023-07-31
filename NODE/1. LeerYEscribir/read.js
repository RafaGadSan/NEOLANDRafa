const { log } = require("console");
const fs = require("fs");
fs.readFile("juegos.json", (err, juegos) => {
  if (err) {
    console.log(`error:${err}`);
  } else {
    const juegosParseados = JSON.parse(juegos);
    console.log(juegosParseados);
  }
});

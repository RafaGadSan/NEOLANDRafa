const fs = require("fs");

// HAY QUE INSTALAR LA SIGUIENTE LIBRERIA CON EL SIGUIENTE COMANDO npm i fast-xml-parser
const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

const parser = new XMLParser();

fs.readFile("rootAlumns.xml", "UTF-8", (error, data) => {
  let dataParse;
  error ? console.log(error) : (dataParse = parser.parse(data));

  const { alumnsNeolandROOT } = dataParse;
  console.log(alumnsNeolandROOT);
  const { alumns } = alumnsNeolandROOT;
  console.log("🚀 ~ file: read.js:15 ~ fs.readFile ~", alumns[0]["name"]);
  console.log("🚀 ~ file: read.js:15 ~ fs.readFile ~", alumns[0].name);
});

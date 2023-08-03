const fs = require("fs");

const { XMLParser, XMLBuilder, XMLValidator } = require("fast-xml-parser");

const parser = new XMLParser();

fs.readFile("listadoAnimes.xml", "UTF-8", (error, data) => {
  let dataParse;
  error ? console.log(error) : (dataParse = parser.parse(data));

  const { listadoAnimes } = dataParse;
  console.log(listadoAnimes);
  const { animes } = listadoAnimes;
  console.log(animes);
});

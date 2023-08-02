//! -------------- importaciones-----
import { writeFile } from "fs"; // ---> encargar de escribir el archivo final csv

//! -------------- data que queremos transformar en csv
const alumnos = [
  {
    name: "Rodri",
    age: "43",
    job: "dev",
  },
  {
    name: "Laura",
    age: "37",
    job: "libreria",
  },
  {
    name: "Antonio",
    age: "33",
    job: "dev",
  },
];

//! -------------- funcion que se encarga de convertir a csv

const convertCSV = (data) => {
  let csv = "";

  // sacamos las cabeceras de las tablas

  let headers = Object.keys(data[0]);

  // empiezo a escribir las cabeceras de la  table

  csv += headers.join(";") + "\n";

  /// vamos a escribir la info de los object-position:
  data.forEach((row) => {
    headers.forEach((header, index) => {
      if (index > 0) {
        csv += ";";
      }

      csv += row[header];
    });

    csv += "\n";
  });

  return csv;
};

const csvString = convertCSV(alumnos);
console.log("🚀 ~ file: write.js:53 ~ csvString:", csvString);

//! --------------- escribir la info en un archivo csv

writeFile("alumns.csv", csvString, () => {
  console.log("archivo creado ---- 😋");
});

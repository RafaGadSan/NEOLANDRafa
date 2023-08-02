///! -------- 1) IMPORTACIONES--------
const csv = require("csv-parser");
const fs = require("fs");

//! ---------- 2) OBJETO DONDE METAMOS LA INFORMACION PARSEADA------

const dataStream = [];

//! ----------- 3) FUNCION DE LECTURA DEL ARCHIVO----------------------
fs.createReadStream("indicator.csv")
  .pipe(csv({ separator: ";" }))
  .on("data", (data) => dataStream.push(data))
  .on("end", () => printConsole(dataStream));

//! ------------ 4) FUNCION QUE SE ENCARGA DE PROCESAR LA INFORMACION---------
const printConsole = (data) => {
  console.log(data);
};

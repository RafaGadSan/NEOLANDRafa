//! ---------------------- importaciones
import fs from "fs";

//! ---------------------- leer el archivo
const readData = () => {
  fs.readFile("ejemplo.txt", "utf8", (error, data) => {
    error ? console.log(error) : correctData(data);
  });
};

//! ---------------------- funcion que se encarga de corregir la date
const correctData = (data) => {
  ///El carácter \D representa cualquier carácter que no sea un dígito.
  /// La  /g en la expresión regular significa que la búsqueda debe ser global, es decir, buscar en todo el texto en lugar de solo la primera coincidencia.
  /// paginas para aprender expresiones regulares
  // ------> https://regex101.com/
  // ------> https://regexr.com/

  let fixedData = data.match(/\D/g).join("");
  writeCorrectText(fixedData);
};

//! ---------------------- funcion que escribe la data en un nuevo archivo corregido
const writeCorrectText = (data) => {
  fs.writeFile("correctText.txt", data, () => {
    console.log("archivo creado ....🤩");
  });
};

readData();

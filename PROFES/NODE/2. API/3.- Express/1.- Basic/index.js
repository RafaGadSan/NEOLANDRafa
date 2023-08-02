//! ---------------------- requerimos express
const express = require("express");

//! ---------------------- crear una variable  con el puerto

const PORT = 8080;

//! ---------------------- creamos el servidor web
const app = express();

//! ---------------------- escuchamos en el puerto el servidor
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

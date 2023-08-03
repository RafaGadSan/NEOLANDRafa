//! ---------------------- requerimos express y dotenv
const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

//Creamos el almacén

//! ----------------------- conectar con MONGO DB gracias a MONGOOSE
const { connect } = require("./src/utils/db");
connect();
//! ---------------------- crear una variable  con el puerto

const PORT = process.env.PORT;

//! ---------------------- creamos el servidor web
const app = express();

//! ---------------------- escuchamos en el puerto el servidor
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

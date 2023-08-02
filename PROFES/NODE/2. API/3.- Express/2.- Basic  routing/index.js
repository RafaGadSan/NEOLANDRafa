//! ---------------------- requerimos express
const express = require("express");

//! ---------------------- crear una variable  con el puerto

const PORT = 8080;

//! ---------------------- creamos el servidor web
const app = express();

//? ---------------------------------------------------------------------------------------------
//! -----------------------------------ROUTING---------------------------------------------------
//? ---------------------------------------------------------------------------------------------

const router = express.Router();

router.get("/saludo", (req, res, next) => {
  res.send("<h1>Hello world</h1>");
});

router.get("/movies", (req, res) => {
  const movies = ["spiderman", "aquaman", "barbie"];
  res.send(movies);
});

app.use("/api/v1/", router);
//! ---------------------- escuchamos en el puerto el servidor
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

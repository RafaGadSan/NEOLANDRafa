//! ---------------------- requerimos express
const express = require("express");

//! ---------------------- crear una variable  con el puerto

const PORT = 8080;

//! ---------------------- creamos el servidor web
const app = express();

//? ---------------------------------------------------------------------------------------------
//! -----------------------------------ROUTING con param y query---------------------------------
//? ---------------------------------------------------------------------------------------------

const router = express.Router();

//--------------------- ++++++++++ EJEMPLO DDE PARAM ++++++++++++++++++++++++++++++++++++++++
router.get("/buscar/:name", (req, res, next) => {
  const { name } = req.params;
  const alumns = ["federico", "lucrecia", "raul", "victor", "juanico"];
  let acc = 0;
  alumns.forEach(
    (element) => element.toLowerCase() === name.toLowerCase() && acc++
  );

  return acc > 0 ? res.status(200).json("💚") : res.status(404).json("💥");
});

//--------------------- ++++++++++ EJEMPLO DDE QUERY PARAM ++++++++++++++++++++++++++++++++++++++++
router.get("/people", (req, res, next) => {
  const { name, apellido } = req.query;
  const alumns = ["federico", "lucrecia", "raul", "victor", "juanico"];
  let acc = 0;
  alumns.forEach(
    (element) => element?.toLowerCase() === name?.toLowerCase() && acc++
  );

  return acc > 0
    ? res.status(200).json("💚" + apellido)
    : res.status(404).json("💥");
});

//! ---------DIFERENCIAS DEL PARAM Y EL QUERY PARAM

//? -----1) El param el siempre necesario para que se meta en la ruta y el query es opcional
//? -----2) Los query se meten despues de la ruta empezando ? se pone el mnombre del query = Y SU VALOR
//? ----------EJEMPLO DEL PUNTO 2: http://localhost:8080/api/v1/people?name=pedro&apellido=lerida&age=30

app.use("/api/v1/", router);
//! ---------------------- escuchamos en el puerto el servidor
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});

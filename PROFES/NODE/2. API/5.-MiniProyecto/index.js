const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const { configCloudinary } = require("./src/middleware/files.middleware");
configCloudinary();

const { connect } = require("./src/utils/db");
connect();

const PORT = process.env.PORT;

//Creamos el servidor
const app = express();

// limitaciones de datos
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: false }));

//------RUTAS------
const CharacterRoutes = require("./src/api/routes/Character.routes");
app.use("/api/v1/character", CharacterRoutes);

app.use("*", (req, res, next) => {
  const error = new Error("Ruta no encontrada");
  error.status = 404;
  return next(error);
});

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Error inesperado");
});

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto: ${PORT}, en http://localhost:${PORT}`
  );
});

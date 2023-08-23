// // -------------------------INDEX COMPLETO----------------------------------------
// //! creamos el servidor web
// const { configCloudinary } = require("./src/middleware/files.middleware");
// const { connect } = require("./src/utils/db");
// const express = require("express");
// const dotenv = require("dotenv");
// dotenv.config();

// const BASE_URL = process.env.BASE_URL;

// //! conectamos con la base de datos
// connect();
// const app = express();
// configCloudinary();
// const PORT = process.env.PORT;
// //! configurar las cors
// const cors = require("cors");
// app.use(
//   cors({
//     origin: "*",
//     credentials: true,
//   })
// );

// //! limitaciones en la recepcion y envio de datos en 5mb
// app.use(express.json({ limit: "5mb" }));
// app.use(express.urlencoded({ limit: "5mb", extended: false }));

// //! -----ROUTES-----------
// const UserRoutes = require("./src/api/routes/user.routes");

// app.use("/api/v1/users", UserRoutes);

// //! Cuando no se mete ninguna routa
// app.use("*", (req, res, next) => {
//   const error = new Error("Route not found");
//   error.status = 404;
//   return next(error);
// });

// //! ERRO 500 DEL SERVER
// app.use((error, req, res) => {
//   return res
//     .status(error.status || 500)
//     .json(error.message || "Unexpected error");
// });

// //! ----ESCUCHAMOS EN EL PORT LA BASE DE DATOS ------
// app.disable("x-powered-by");
// app.listen(PORT, () => {
//   console.log(`Listening on PORT ${BASE_URL}${PORT}`);
// });
//!-------------------------------------ABAJO EL DE LAURA--------------
const cors = require('cors');

const express = require('express');

const dotenv = require('dotenv');

dotenv.config();

const { connect } = require('./src/utils/db');
connect();

const { configCloudinary } = require('./src/middleware/files.middleware');

configCloudinary();

const PORT = process.env.PORT;

//Creamos el servidor
const app = express();
app.use(
  cors({
    origin: '*',
    credentials: true,
  })
);
//limitaciones

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ limit: '5mb', extended: false }));

//RUTAS

const UserRoutes = require('./src/api/routes/user.routes');
const IngredientRoutes = require('./src/api/routes/ingredient.routes');
const RecipeRoutes = require('./src/api/routes/recipe.routes');

app.use('/api/v1/users', UserRoutes);
app.use('/api/v1/ingredients', IngredientRoutes);
app.use('/api/v1/recipes', RecipeRoutes);

app.use('*', (req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  return next(error);
});

app.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || 'Error inesperado');
});

//Evita que se revelen las tecnologías
app.disable('x-powered-by');

app.listen(PORT, () => {
  console.log(
    `Servidor escuchando en el puerto: ${PORT}, en http://localhost:${PORT}`
  );
});

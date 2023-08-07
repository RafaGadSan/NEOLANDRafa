//! ---------- nos requerimos mongoose
const mongoose = require("mongoose");

//! ---------- creamos el schema

// Definimos el modelo de datos
// ----------> Tenmos las diferentes claves con su TYPE
// ----------> tenemos que definir las propiedades de los datos: limite de longuitud, si es requerido, si es unico...

const MovieSchema = new mongoose.Schema(
  {
    title: { type: String },
    poster: { type: String },
    year: { type: Number },
    released: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
//! ---------- creamos el modelo

const Movie = mongoose.model("Movie", MovieSchema);

//! ----------- exportamos el modelo
module.exports = Movie;

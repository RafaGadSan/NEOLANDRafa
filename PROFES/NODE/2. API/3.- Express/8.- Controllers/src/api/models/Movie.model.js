//! ---------- nos requerimos mongoose
const mongoose = require("mongoose");

//! ---------- creamos el schema

// Definimos el modelo de datos
// ----------> Tenmos las diferentes claves con su TYPE
// ----------> tenemos que definir las propiedades de los datos: limite de longuitud, si es requerido, si es unico...

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Character" }],
    view: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
//! ---------- creamos el modelo

const Movie = mongoose.model("Movie", MovieSchema);

//! ----------- exportamos el modelo
module.exports = Movie;

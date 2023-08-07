//! ---------- nos requerimos mongoose
const mongoose = require("mongoose");

//! ---------- nos traemos de la libreria mongoose schema
const Schema = mongoose.Schema;

//! ---------- creamos el schema

// Definimos el modelo de datos
// ----------> Tenmos las diferentes claves con su TYPE
// ----------> tenemos que definir las propiedades de los datos: limite de longuitud, si es requerido, si es unico...

const CharacterSchema = new Schema(
  {
    name: { type: String, required: false, unique: true },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  {
    timestamps: true,
  }
);
//! ---------- creamos el modelo

const Character = mongoose.model("Character", CharacterSchema);

//! ----------- exportamos el modelo
module.exports = Character;

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const IngredientSchema = new Schema(
  {
    //Es importante: azúcares simples, azúcares totales, grasa, proteína, sal, fibra
    name: { type: String, required: true, unique: true },
    simpleSugars: { type: Number, required: false },
    totalSugars: { type: Number, required: false },
    fat: { type: Number, required: false },
    protein: { type: Number, required: false },
    salt: { type: Number, required: false },
    fiber: { type: Number, required: false },
    //Lo suyo es hacer una tabla en la BBDD para los alérgenos.
    allergenGroup: {
      type: String,
      enum: [
        "Gluten",
        "Crustáceos",
        "Huevo",
        "Pescado",
        "Altramuces",
        "Soja",
        "Leche",
        "Frutos secos",
        "Mostaza",
        "Cacahuetes",
        "Sésamo",
        "Sulfitos",
        "Apio",
        "Moluscos",
      ],
      required: false,
    },
    image: { type: String, required: false },
    recipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
    usersFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;

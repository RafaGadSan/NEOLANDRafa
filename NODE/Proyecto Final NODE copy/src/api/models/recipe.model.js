const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    preparationTime: { type: Number, required: false },
    recipeSteps: { type: String, required: false },
    image: { type: String, required: false },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient" }],
    usersFav: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", RecipeSchema);

module.exports = Recipe;

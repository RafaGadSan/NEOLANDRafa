const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    preparationTime: { type: Number, required: false },
    recipeSteps: { type: String, required: false },
    image: { type: String, required: false },
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ingredient' }],
    usersFav: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    //hacer middleware para que solo los nutris/admins puedan cambiar recetas. Y un nutri no puede cambiar lo de otros.
    //No se borran las recetas, solo si están en favoritos.
    //si se borra a alguien no se quita de la base, se pone como que está de baja.
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model('Recipe', RecipeSchema);

module.exports = Recipe;

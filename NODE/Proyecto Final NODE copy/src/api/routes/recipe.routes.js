const { uploadRecipe } = require("../../middleware/files.middleware");
const {
  postRecipe,
  getRecipeById,
  getAllRecipes,
  getByNameRecipe,
  updateRecipe,
  deleteRecipe,
  toggleIngredient,
  filterMaxPrepTime,
  getRecipeNutritionalInfo,
} = require("../controllers/recipe.controller");

const RecipeRoutes = require("express").Router();

RecipeRoutes.post("/", uploadRecipe.single("image"), postRecipe);
RecipeRoutes.get("/:id", getRecipeById);
RecipeRoutes.get("/", getAllRecipes);
RecipeRoutes.get("/getByName/:name", getByNameRecipe);
RecipeRoutes.patch("/update/:id", uploadRecipe.single("image"), updateRecipe);
RecipeRoutes.patch("/toggle/:id", toggleIngredient);
RecipeRoutes.delete("/:id", deleteRecipe);
RecipeRoutes.get("/getByMaxTime/:preparationTime", filterMaxPrepTime);
RecipeRoutes.get("/getInfo/:id", getRecipeNutritionalInfo);

module.exports = RecipeRoutes;

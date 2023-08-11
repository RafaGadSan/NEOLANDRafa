const { uploadIngredient } = require("../../middleware/files.middleware");
const {
  postIngredient,
  getIngredientById,
  getAllIngredients,
  getByNameIngredient,
  updateIngredient,
  toggleRecipe,
  deleteIngredient,
} = require("../controllers/ingredient.controller");

const IngredientRoutes = require("express").Router();

IngredientRoutes.post("/", uploadIngredient.single("image"), postIngredient);
IngredientRoutes.get("/:id", getIngredientById);
IngredientRoutes.get("/", getAllIngredients);
IngredientRoutes.get("/getByName/name", getByNameIngredient);
IngredientRoutes.patch(
  "/update/:id",
  uploadIngredient.single("image"),
  updateIngredient
);
IngredientRoutes.patch("/toggle/:id", toggleRecipe);
IngredientRoutes.delete("/:id", deleteIngredient);
module.exports = IngredientRoutes;

const { uploadRecipe } = require('../../middleware/files.middleware');
const { checkPermissions } = require('../../middleware/auth.middleware.js');

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
} = require('../controllers/recipe.controller');

const RecipeRoutes = require('express').Router();

RecipeRoutes.post(
  '/',
  uploadRecipe.single('image'),
  checkPermissions({ checkOwner: false, where: 'recipe' }),
  postRecipe
);
RecipeRoutes.get('/:id', getRecipeById);
RecipeRoutes.get('/', getAllRecipes);
RecipeRoutes.get('/getByName/:name', getByNameRecipe);
RecipeRoutes.patch(
  '/update/:id',
  uploadRecipe.single('image'),
  checkPermissions({ checkOwner: true, where: 'recipe' }),
  updateRecipe
);
RecipeRoutes.patch(
  '/toggle/:id',
  checkPermissions({ checkOwner: true, where: 'recipe' }),
  toggleIngredient
);
RecipeRoutes.delete(
  '/:id',
  checkPermissions({ checkOwner: true, where: 'recipe' }),
  deleteRecipe
);
RecipeRoutes.get('/getByMaxTime/:preparationTime', filterMaxPrepTime);
RecipeRoutes.get('/getInfo/:id', getRecipeNutritionalInfo);

module.exports = RecipeRoutes;

const { checkPermissions } = require('../../middleware/auth.middleware');
const { uploadIngredient } = require('../../middleware/files.middleware');
const {
  postIngredient,
  getIngredientById,
  getAllIngredients,
  getByNameIngredient,
  updateIngredient,
  //  toggleRecipe,
  deleteIngredient,
  getTop5Protein,
  getTop5Fav,
} = require('../controllers/ingredient.controller');

const IngredientRoutes = require('express').Router();

IngredientRoutes.post(
  '/',
  uploadIngredient.single('image'),
  checkPermissions({ checkOwner: false, where: 'ingredient' }),
  postIngredient
);
IngredientRoutes.get('/:id', getIngredientById);
IngredientRoutes.get('/', getAllIngredients);
IngredientRoutes.get('/getByName/name', getByNameIngredient);
IngredientRoutes.patch(
  '/update/:id',
  uploadIngredient.single('image'),
  checkPermissions({ checkOwner: true, where: 'ingredient' }),
  updateIngredient
);
//IngredientRoutes.patch("/toggle/:id", toggleRecipe);
IngredientRoutes.delete(
  '/:id',
  checkPermissions({ checkOwner: true, where: 'ingredient' }),
  deleteIngredient
);
IngredientRoutes.get('/top5/protein', getTop5Protein);
IngredientRoutes.get('/top5/fav', getTop5Fav);
module.exports = IngredientRoutes;

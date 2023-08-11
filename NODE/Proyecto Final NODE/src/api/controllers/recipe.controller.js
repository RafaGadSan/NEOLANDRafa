const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Ingredient = require("../models/ingredient.model");
const Recipe = require("../models/recipe.model");

//!----------POSTCreate----------
//Create recipe
const postRecipe = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    await Recipe.syncIndexes();

    const newRecipe = new Recipe(req.body);
    //ponemos imagen por defecto si no hay una.
    if (req.file) {
      newRecipe.image = catchImage;
    } else {
      newRecipe.image =
        "https://res.cloudinary.com/ds5eoiiqk/image/upload/v1691592351/proyectoNode/recipes/receipdefault_ttxva8.jpg";
    }

    //guardamos el receta en la bbdd
    const savedRecipe = await newRecipe.save();
    if (savedRecipe) {
      return res.status(200).json(savedRecipe);
    } else {
      return res
        .status(404)
        .json("No se ha podido guardar la receta en la bbdd");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//!-------------Get by id-----------

const getRecipeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const recipeById = await Recipe.findById(id);
    if (recipeById) {
      return res.status(200).json({ data: recipeById });
    } else {
      res.status(404).json("Receta no encontrada");
    }
  } catch (error) {
    return next(error);
  }
};

//!--------get all---------

const getAllRecipes = async (req, res, next) => {
  try {
    const recipesAll = await Recipe.find();
    if (recipesAll.length > 0) {
      return res.status(200).json({ data: recipesAll });
    } else {
      res.status(404).json("recetas no encontradas.");
    }
  } catch (error) {
    return next(error);
  }
};

//!-------get by name-------

/* GUILLE
const getByName = async (req, res, next) => {
  try {
    const { name } = req.body;
    const gameByName = await Game.find();
    const filterGame = gameByName.filter((element) =>
      element.name.includes(name)
    );
    if (filterGame.length > 0) {
      return res.status(200).json({ data: filterGame });
    } else {
      res.status(404).json("game not found");
    }
  } catch (error) {
    return next(error);
  }
}; */
const getByNameRecipe = async (req, res, next) => {
  try {
    const { name } = req.query;
    const recipeByName = await Recipe.find({ name });

    if (recipeByName.length > 0) {
      return res.status(200).json({ data: recipeByName });
    } else {
      return res.status(404).json("No se ha podido encontrar la receta");
    }
  } catch (error) {
    return next(error);
  }
};

//!----------update----------

const updateRecipe = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;
    const recipeById = await Recipe.findById(id);

    if (recipeById) {
      const oldImg = recipeById.image;
      const customBody = {
        _id: recipeById._id,
        image: req.file?.path ? req.file?.path : recipeById.image,
        name: req.body?.name ? req.body?.name : recipeById.name,
        preparationTime: req.body?.preparationTime
          ? req.body?.preparationTime
          : recipeById.preparationTime,
        recipeSteps: req.body?.recipeSteps
          ? req.body?.recipeSteps
          : recipeById.recipeSteps,
      };
      await Recipe.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(recipeById.image);
      }

      //testeamos que actualice
      const updateNewRecipe = await Recipe.findById(id);
      const elementUpdate = Object.keys(req.body);
      let test = {};
      elementUpdate.forEach((item) => {
        if (req.body[item] == updateNewRecipe[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }
        if (req.file) {
          updateNewRecipe.image == req.file?.path
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }
      });
      //lanzamos respuesta
      let acc = 0;
      for (clave in test) {
        if (test[clave] == false) acc++;
      }

      if (acc > 0) {
        return res.status(404).json({
          dataTest: test,
          update: false,
        });
      } else {
        return res.status(200).json({
          dataTest: test,
          update: updateNewRecipe,
        });
      }
    } else {
      return res.status(404).json("Receta no encontrado");
    }
  } catch (error) {
    return next(error);
  }
};
//!--------toggle ingredient(add or delete)--------

const toggleIngredient = async (req, res, next) => {
  try {
    let arrayIngredients;
    const { id } = req.params;
    const { ingredients } = req.body;

    const recipeById = await Recipe.findById(id);
    let updateRecipe;
    let updateIng;
    if (recipeById) {
      arrayIngredients = ingredients.split(",");
      arrayIngredients.forEach(async (element) => {
        if (recipeById.ingredients.includes(element)) {
          console.log("🌶️");
          try {
            await Recipe.findByIdAndUpdate(id, {
              $pull: { ingredients: element },
            });
            updateRecipe = await Recipe.findById(id);
            try {
              await Ingredient.findByIdAndUpdate(element, {
                $pull: { recipes: id },
              });
              updateIng = await Ingredient.findById(element);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        } else {
          console.log("💙");
          try {
            await Recipe.findByIdAndUpdate(id, {
              $push: { ingredients: element },
            });
            updateRecipe = await Recipe.findById(id);
            try {
              await Ingredient.findByIdAndUpdate(element, {
                $push: { recipes: id },
              });
              updateIng = await Ingredient.findById(element);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        }
      });

      setTimeout(async () => {
        return res.status(200).json({
          update: await Recipe.findById(id).populate({
            path: "ingredients",
            populate: {
              path: "recipes",
            },
          }),
        });
      }, 500);

      // POPULATE DE VARIAS CLAVES DEL MODELO CON PUNTOS: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691401628/POPULATE_CON_PUNTOS_mfbngz.jpg
      // POPULATE EN LINEA DE VARIAS CLAVES DEL MODELO: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691401628/POPULATE_EN_LINEA_kmmnid.jpg
    } else {
      return res.status(404).json("Ingrediente no encontrado");
    }
  } catch (error) {
    return next(error);
  }
};

//!----------delete recipe---------

const deleteRecipe = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Recipe.findByIdAndDelete(id);
    try {
      const test = await Recipe.updateMany(
        { recipes: id },
        { $pull: { recipe: id } }
      );
      return res.status(200).json({
        test: test.modifiedCount === test.matchedCount ? true : false,
      });
    } catch (error) {
      return res.status(404).json("Error borrando la receta");
    }
  } catch (error) {
    return next(error);
  }
};

//!------------post----------

module.exports = {
  postRecipe,
  getRecipeById,
  getAllRecipes,
  getByNameRecipe,
  updateRecipe,
  toggleIngredient,
  deleteRecipe,
};

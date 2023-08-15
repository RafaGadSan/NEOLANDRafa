const { deleteImgCloudinary } = require('../../middleware/files.middleware');
const Ingredient = require('../models/ingredient.model');
const Recipe = require('../models/recipe.model');

//!----------POSTCreate----------
//Create ingredient
const postIngredient = async (req, res, next) => {
  let cathIngredient = req.file?.path;
  try {
    await Ingredient.syncIndexes();

    const newIngredient = new Ingredient(req.body);
    //ponemos imagen por defecto si no hay una.
    if (req.file) {
      newIngredient.image = cathIngredient;
    } else {
      newIngredient.image =
        'https://res.cloudinary.com/ds5eoiiqk/image/upload/v1691592262/proyectoNode/ingredients/ingredientDefault_bilenj.jpg';
    }
    newIngredient.owner = req.user.userId;
    //guardamos el ingrediente en la bbdd
    const savedIngredient = await newIngredient.save();
    if (savedIngredient) {
      return res.status(200).json(savedIngredient);
    } else {
      return res
        .status(404)
        .json('No se ha podido guardar el ingrediente en la bbdd');
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(cathIngredient);
    return next(error);
  }
};

//!-------------Get by id-----------

const getIngredientById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const ingredientById = await Ingredient.findById(id);
    if (ingredientById) {
      return res.status(200).json({ data: ingredientById });
    } else {
      res.status(404).json('Ingrediente no encontrado');
    }
  } catch (error) {
    return next(error);
  }
};

//!--------get all---------

const getAllIngredients = async (req, res, next) => {
  try {
    const ingredientAll = await Ingredient.find();
    if (ingredientAll.length > 0) {
      return res.status(200).json({ data: ingredientAll });
    } else {
      res.status(404).json('ingredientes no encontrados.');
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
const getByNameIngredient = async (req, res, next) => {
  try {
    const { name } = req.query;
    const ingredientByName = await Ingredient.find({ name });

    if (ingredientByName.length > 0) {
      return res.status(200).json({ data: ingredientByName });
    } else {
      return res.status(404).json('No se ha podido encontrar el ingrediente');
    }
  } catch (error) {
    return next(error);
  }
};

//!----------update----------

const updateIngredient = async (req, res, next) => {
  try {
    const id = req.params.id;

    // const ingredientById = await checkIngredientPermissions(req, res, id);
    // //si da un error en la función de checkRecipePermissions
    // if (ingredientById.status) return;
    const ingredientById = req.ingredient;
    if (ingredientById) {
      const customBody = {
        _id: ingredientById._id,
        image: req.file?.path ? req.file?.path : ingredientById.image,
        name: req.body?.name ? req.body?.name : ingredientById.name,
        simpleSugars: req.body?.simpleSugars
          ? req.body?.simpleSugars
          : ingredientById.simpleSugars,
        totalSugars: req.body?.totalSugars
          ? req.body?.totalSugars
          : ingredientById.totalSugars,
        fat: req.body?.fat ? req.body?.fat : ingredientById.fat,
        protein: req.body?.protein ? req.body?.protein : ingredientById.protein,
        salt: req.body?.salt ? req.body?.salt : ingredientById.salt,
        fiber: req.body?.fiber ? req.body?.fiber : ingredientById.fiber,
        allergenGroup: req.body?.allergenGroup
          ? req.body?.allergenGroup
          : ingredientById.allergenGroup,
      };
      await Ingredient.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(ingredientById.image);
      }

      //testeamos que actualice
      const updateNewIngredient = await Ingredient.findById(id);
      const elementUpdate = Object.keys(req.body);
      let test = {};
      elementUpdate.forEach((item) => {
        if (req.body[item] == updateNewIngredient[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }
        if (req.file) {
          updateNewIngredient.image == req.file?.path
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }
      });
      //lanzamos respuesta
      let acc = 0;
      for (let clave in test) {
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
          update: updateNewIngredient,
        });
      }
    } else {
      return res.status(404).json('Ingrediente no encontrado');
    }
  } catch (error) {
    return next(error);
  }
};
// //!--------toggle recipe(add or delete)--------

// const toggleRecipe = async (req, res, next) => {
//   try {
//     let arrayRecipes;
//     const { id } = req.params;
//     const { recipes } = req.body;

//     const ingredientById = await Ingredient.findById(id);
//     let updateIngredient;
//     let updateRec;
//     if (ingredientById) {
//       arrayRecipes = recipes.split(",");
//       arrayRecipes.forEach(async (element) => {
//         if (ingredientById.recipes.includes(element)) {
//           console.log("🥘");
//           try {
//             await Ingredient.findByIdAndUpdate(id, {
//               $pull: { recipes: element },
//             });
//             updateIngredient = await Ingredient.findById(id);
//             try {
//               await Recipe.findByIdAndUpdate(element, {
//                 $pull: { ingredients: id },
//               });
//               updateRec = await Recipe.findById(element);
//             } catch (error) {
//               return res.status(404).json(error);
//             }
//           } catch (error) {
//             return res.status(404).json(error);
//           }
//         } else {
//           console.log("💙");
//           try {
//             await Ingredient.findByIdAndUpdate(id, {
//               $push: { recipes: element },
//             });
//             updateIngredient = await Ingredient.findById(id);
//             try {
//               await Recipe.findByIdAndUpdate(element, {
//                 $push: { ingredients: id },
//               });
//               updateRec = await Recipe.findById(element);
//             } catch (error) {
//               return res.status(404).json(error);
//             }
//           } catch (error) {
//             return res.status(404).json(error);
//           }
//         }
//       });

//       setTimeout(async () => {
//         return res.status(200).json({
//           update: await Ingredient.findById(id).populate({
//             path: "recipes",
//             populate: {
//               path: "ingredients",
//             },
//           }),
//         });
//       }, 500);

//       // POPULATE DE VARIAS CLAVES DEL MODELO CON PUNTOS: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691401628/POPULATE_CON_PUNTOS_mfbngz.jpg
//       // POPULATE EN LINEA DE VARIAS CLAVES DEL MODELO: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691401628/POPULATE_EN_LINEA_kmmnid.jpg
//     } else {
//       return res.status(404).json("Receta no encontrada");
//     }
//   } catch (error) {
//     return next(error);
//   }
// };

//!----------delete ingredient---------

const deleteIngredient = async (req, res, next) => {
  try {
    const { id } = req.params;

    // const ingredientById = await checkIngredientPermissions(req, res, id);
    // //si da un error en la función de checkRecipePermissions
    // if (ingredientById.status) return;

    await Ingredient.findByIdAndDelete(id);
    try {
      const test = await Recipe.updateMany(
        { ingredients: id },
        { $pull: { ingredient: id } }
      );
      return res.status(200).json({
        test: test.modifiedCount === test.matchedCount ? true : false,
      });
    } catch (error) {
      return res.status(404).json('Error borrando el ingrediente');
    }
  } catch (error) {
    return next(error);
  }
};

//!------------top 5 protein----------

const getTop5Protein = async (req, res) => {
  try {
    const ingredientes = await Ingredient.find();
    ingredientes.sort((a, b) => b.protein - a.protein);
    const top5protein = ingredientes.slice(0, 5);
    return res.status(200).json(top5protein);
  } catch (error) {
    return res.status(400).json('error trayendo el top 5 de proteinas');
  }
};
//!------------Top 5 con más favs---------
const getTop5Fav = async (req, res) => {
  try {
    const ingredientes = await Ingredient.find();
    ingredientes.sort((a, b) => b.usersFav.length - a.usersFav.length);
    const top5fav = ingredientes.slice(0, 5);
    return res.status(200).json(top5fav);
  } catch (error) {
    return res.status(400).json('error trayendo el top 5 de proteinas');
  }
};

// const checkIngredientPermissions = async (req, res, id) => {
//   const role = req.user.role;
//   const ingredient = await Ingredient.findById(id).lean();

//   if (
//     role !== "admin" &&
//     ingredient.owner.toString() !== req.user.userId.toString()
//   )
//     return res.status(403).json("No eres dueño de este ingrediente");

//   return ingredient;
// };

module.exports = {
  postIngredient,
  getIngredientById,
  getAllIngredients,
  getByNameIngredient,
  updateIngredient,
  //toggleRecipe,
  deleteIngredient,
  getTop5Protein,
  getTop5Fav,
};

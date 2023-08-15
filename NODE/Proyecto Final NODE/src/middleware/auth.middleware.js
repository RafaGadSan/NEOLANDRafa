// archivo en middleware --> auth.middleware.js
const Ingredient = require('../api/models/ingredient.model');
const Recipe = require('../api/models/recipe.model');
const User = require('../api/models/user.model');
const { verifyToken } = require('../utils/token');
const dotenv = require('dotenv');
dotenv.config();

const isAuth = async (req, res, next) => {
  // como es un token de tipo bearer le quitamos el prefijo para poder utlizarlo
  const token = req.headers.authorization?.replace('Bearer ', '');
  // si no hay token  le lanzamos un error
  if (!token) {
    return next(new Error('Unauthorized'));
  }

  try {
    // vamos a decodificar el token para sacar el id
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);

    // si todo esta bien continuamos
    next();
  } catch (error) {
    return next(error);
  }
};

const isAuthAdmin = async (req, res, next) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) {
    return next(new Error('Unauthorized'));
  }

  try {
    const decoded = verifyToken(token, process.env.JWT_SECRET);
    console.log(decoded);
    req.user = await User.findById(decoded.id);

    //! -----> La unica diferencia es que comprobamos si es administrador
    if (req.user?.rol !== 'admin') {
      return next(new Error('Unauthorized, not admin'));
    }
    next();
  } catch (error) {
    return next(error);
  }
};

// const hasRole = (role) => {
//   return async (req, res, next) => {
//     try {
//       const token = req.headers.authorization?.replace("Bearer ", "");
//       if (!token) {
//         return next(new Error("Unauthorized"));
//       }

//       const decoded = verifyToken(token, process.env.JWT_SECRET);
//       req.user = await User.findById(decoded.id);

//       if (req.user?.rol === role || req.user?.rol === "admin") {
//         next();
//       } else {
//         return next(new Error("Unauthorized"));
//       }
//     } catch (error) {
//       return next(error);
//     }
//   };
// };

const checkPermissions = (params) => {
  const checkOwner = params.checkOwner;
  const where = params.where;

  return async (req, res, next) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) {
        return next(new Error('Unauthorized'));
      }

      const decoded = verifyToken(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.id).lean();

      if (!user)
        return res
          .status(404)
          .json({ success: false, error: 'No se encuentra el usuario' });

      if (user.role === 'cliente')
        return res
          .status(401)
          .json('El usuario no tiene permiso para la acción solicitada');
      //!-----------------parte de recipe

      if (where === 'recipe' && checkOwner) {
        const recipe = await Recipe.findById(req.params.id).lean();

        if (!recipe) return res.status(404).json('No se encuentra la receta');

        if (
          user.role !== 'admin' &&
          recipe.owner.toString() !== user._id.toString()
        )
          return res.status(403).json('No eres dueño de esta receta');

        req.recipe = recipe;
      }
      //Caso post
      else if (where === 'recipe' && !checkOwner) {
        req.user = {};
        req.user.userId = user._id;
      }
      //!-----------------parte de ingredient
      if (where === 'ingredient' && checkOwner) {
        const ingredient = await Ingredient.findById(req.params.id).lean();

        if (!ingredient)
          return res.status(404).json('No se encuentra el ingrediente');

        if (
          user.role !== 'admin' &&
          ingredient.owner.toString() !== user._id.toString()
        )
          return res.status(403).json('No eres dueño de este ingrediente');

        req.ingredient = ingredient;
      } else if (where === 'ingredient' && !checkOwner) {
        req.user = {};
        req.user.userId = user._id;
      }
      next();
    } catch (e) {
      //Esto te dice si es un error y que tan solo devuelva el mensaje,
      // sino, que devuelva el error entero
      if (e instanceof Error) console.log(e.message);
      else console.log(e);
      return res.status(400).json('Bad request');
    }
  };
};
module.exports = {
  isAuth,
  isAuthAdmin,
  // hasRole,
  checkPermissions,
};

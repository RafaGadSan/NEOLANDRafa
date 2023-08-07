const Character = require("../models/Character.model");
const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Movie = require("../models/Movie.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST create ---------------------------------
//! ---------------------------------------------------------------------

const createCharacter = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    // sincronizamos los index (los elementos unicos) con los posibles cambios que hay en el modelo
    // mirar captura: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691053331/index_cwtcx5.jpg
    await Character.syncIndexes();
    // creamos una instancia del modelo con el req.body que es el cuerpo de la peticion
    const newCharacter = new Character(req.body);
    // //vamos a valorar si tenemos imagen y si no la tenemos una por defecto

    if (req.file) {
      newCharacter.image = catchImage;
    } else {
      newCharacter.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    // vamos a guardar en la bdo el objeto de la instancia del modelo dde character
    const savedCharacter = await newCharacter.save();

    if (savedCharacter) {
      return res.status(200).json(savedCharacter);
    } else {
      return res
        .status(404)
        .json("No se ha podido guardar el character en la bdo");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? ------------------------------- GET by Id---------------------------------
//! ---------------------------------------------------------------------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.findById(id);

    // si no encuentra manda null en el find() si no encuentra manda un array vacio

    if (characterById) {
      return res.status(200).json({ data: characterById });
    } else {
      res.status(404).json("character not found");
    }
  } catch (error) {
    return next(error);
  }
};
//! ---------------------------------------------------------------------
//? -------------------------------get All ---------------------------------
//! ---------------------------------------------------------------------
const getAll = async (req, res, next) => {
  try {
    const characterAll = await Character.find();

    if (characterAll.length > 0) {
      return res.status(200).json({ data: characterAll });
    } else {
      res.status(404).json("character not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? -------------------------------get By name---------------------------------
//! ---------------------------------------------------------------------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.query;
    const characterByName = await Character.find({ name });

    if (characterByName.length > 0) {
      return res.status(200).json({ data: characterByName });
    } else {
      res.status(404).json("character not found");
    }
  } catch (error) {
    return next(error);
  }
};
//! ---------------------------------------------------------------------
//? -------------------------------UPDATE---------------------------------
//! ---------------------------------------------------------------------
const updateCharacter = async (req, res, next) => {
  let catchImg = req.file?.path;
  try {
    const { id } = req.params;

    const characterById = await Character.findById(id);
    if (characterById) {
      // guardamos la antigua imagen por si me ha metido una imagen imagen nueva borrrar la antigua de cloudinary
      //! importante consistencia de datos
      const oldImg = characterById.image;
      const customBody = {
        _id: characterById._id,
        image: req.file?.path ? req.file?.path : characterById.image,
        gender: req.body?.gender ? req.body?.gender : characterById.gender,
        name: req.body?.name ? req.body?.name : characterById.name,
      };
      await Character.findByIdAndUpdate(id, customBody);
      if (req.file?.path) {
        deleteImgCloudinary(characterById.image);
      }

      /// vamos a testear que se haya actualizado todo correctamente
      const updateNewCharacter = await Character.findById(id);
      const elementUpdate = Object.keys(req.body);
      // ------------> acceder a la clave name updateNewCharacter["name"] updateNewCharacter.name
      let test = {};
      elementUpdate.forEach((item) => {
        if (req.body[item] == updateNewCharacter[item]) {
          test[item] = true;
        } else {
          test[item] = false;
        }

        if (req.file) {
          updateNewCharacter.image == req.file?.path
            ? (test = { ...test, file: true })
            : (test = { ...test, file: false });
        }
      });

      // vamos a lanzar la respuesta, tenemos en cuenta que haya o no algun false, si hay algun false se lanza un 404
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
          update: updateNewCharacter,
        });
      }
    } else {
      return res.status(404).json("character not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? --------------------------- ADD and DELETE MOVIE ----------------
//! ---------------------------------------------------------------------

const toggleMovie = async (req, res, next) => {
  try {
    let arrayMovies;
    const { id } = req.params;
    const { movies } = req.body;

    const characterById = await Character.findById(id);
    let updateCharacter;
    //let updateMovie = [];
    let updateMov;
    if (characterById) {
      arrayMovies = movies.split(",");
      arrayMovies.forEach(async (element) => {
        if (characterById.movies.includes(element)) {
          console.log("💖");
          try {
            await Character.findByIdAndUpdate(id, {
              $pull: { movies: element },
            });
            updateCharacter = await Character.findById(id);
            try {
              await Movie.findByIdAndUpdate(element, {
                $pull: { characters: id },
              });

              updateMov = await Movie.findById(element);
              //updateMovie.push(updateMov);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        } else {
          console.log("💙");
          try {
            await Character.findByIdAndUpdate(id, {
              $push: { movies: element },
            });
            updateCharacter = await Character.findById(id);
            try {
              await Movie.findByIdAndUpdate(element, {
                $push: { characters: id },
              });
              updateMov = await Movie.findById(element);
              //updateCharacter.push(updateChar);
            } catch (error) {
              return res.status(404).json(error);
            }
          } catch (error) {
            return res.status(404).json(error);
          }
        }
      });

      setTimeout(async () => {
        // return res
        //   .status(200)
        //   .json({ updateCharacter: updateCharacter, updateMovie: updateMovie });
        // return res
        //   .status(200)
        //   .json({ update: await Character.findById(id).populate("movies") });

        return res.status(200).json({
          update: await Character.findById(id).populate({
            path: "movies",
            populate: {
              path: "characters",
            },
          }),
        });
      }, 500);

      // POPULATE DE VARIAS CLAVES DEL MODELO CON PUNTOS: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691401628/POPULATE_CON_PUNTOS_mfbngz.jpg
      // POPULATE EN LINEA DE VARIAS CLAVES DEL MODELO: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691401628/POPULATE_EN_LINEA_kmmnid.jpg
    } else {
      return res.status(404).json("movie not found");
    }
  } catch (error) {
    return next(error);
  }
};

//! ---------------------------------------------------------------------
//? --------------------------- delete character-------------------------
//! ---------------------------------------------------------------------

const deleteCharacter = async (req, res, next) => {
  try {
    // este id es el id del personaje que quiero borrar
    const { id } = req.params;
    await Character.findByIdAndDelete(id);
    try {
      // updateOne le tengo que dar el elemento exacto que quiero actualizar el cual lo busco antes por id
      // updateMany lo que hace es apuntar al modelo general y todos los que cumplan la condicion se modifican

      const test = await Movie.updateMany(
        { characters: id },
        { $pull: { characters: id } }
      );

      return res.status(200).json({
        test: test.modifiedCount === test.matchedCount ? true : false,
      });
    } catch (error) {
      return res.status(404).json("error delete movie");
    }
  } catch (error) {
    return next(error);
  }
};
//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

module.exports = {
  createCharacter,
  getById,
  getAll,
  getByName,
  updateCharacter,
  toggleMovie,
  deleteCharacter,
};

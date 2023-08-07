const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

//! ---------------------------------------------------------------------
//? -------------------------------POST create ---------------------------------
//! ---------------------------------------------------------------------

const create = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    // sincronizamos los index (los elementos unicos) con los posibles cambios que hay en el modelo
    // mirar captura: https://res.cloudinary.com/dhkbe6djz/image/upload/v1691053331/index_cwtcx5.jpg
    await Character.syncIndexes();
    // creamos una instancia del modelo con el req.body que es el cuerpo de la peticion
    const newCharacter = new Character(req.body);

    //vamos a valorar si tenemos imagen y si no la tenemos una por defecto

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
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

//! ---------------------------------------------------------------------
//? -------------------------------POST ---------------------------------
//! ---------------------------------------------------------------------

module.exports = {
  create,
};

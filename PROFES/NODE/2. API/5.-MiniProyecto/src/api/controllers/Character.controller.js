const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");

const createCharacter = async (req, res, next) => {
  let catchImage = req.file?.path;
  try {
    console.log(req.body);
    await Character.syncIndexes();
    const newCharacter = new Character(req.body);

    if (req.file) {
      newCharacter.image = catchImage;
    } else {
      newCharacter.image =
        "https://res.cloudinary.com/dhkbe6djz/image/upload/v1689099748/UserFTProyect/tntqqfidpsmcmqdhuevb.png";
    }

    const savedCharacter = await newCharacter.save();

    if (savedCharacter) {
      return res.status(200).json(savedCharacter);
    } else {
      return res
        .status(404)
        .json("Error al guardar character en la base de datos");
    }
  } catch (error) {
    req.file?.path && deleteImgCloudinary(catchImage);
    return next(error);
  }
};

module.exports = { createCharacter };

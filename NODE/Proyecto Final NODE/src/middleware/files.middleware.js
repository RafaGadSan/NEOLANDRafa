const multer = require("multer");
const cloudinary = require("cloudinary");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const dotenv = require("dotenv");

dotenv.config();

//Creamos el almacén
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ProyectoNODE",
    allowedFormats: ["jpg", "png", "jpeg", "gif", "svg", "webp"],
  },
});

//Función subir imágenes
const upload = multer({ storage });

//Función de borrar imágenes
const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split("/");
  const nameSplited = imgSplited[imgSplited.length - 1].split(".");
  const folderSplited = imgSplited[imgSplited.length - 2];
  const public_id = `${folderSplited}/${nameSplited[0]}`;

  cloudinary.uploader.destroy(public_id, () => {
    console.log("Image delete in cloudinary");
  });
};

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
};

module.exports = { upload, deleteImgCloudinary, configCloudinary };

const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const dotenv = require('dotenv');

dotenv.config();

//Creamos el almacén para User
const storageUser = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'proyectoNode/users',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'],
  },
});

//Función subir imágenes para User
const uploadUser = multer({ storage: storageUser });

//Creamos el almacén para Recipe
const storageRecipe = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'proyectoNode/recipes',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'],
  },
});

//Función subir imágenes para Recipe
const uploadRecipe = multer({ storage: storageRecipe });

//Creamos el almacén para Ingredient
const storageIngredient = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'proyectoNode/ingredients',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif', 'svg', 'webp'],
  },
});

//Función subir imágenes para Ingredient
const uploadIngredient = multer({ storage: storageIngredient });

//Función de borrar imágenes User
const deleteImgCloudinary = (imgUrl) => {
  const imgSplited = imgUrl.split('/');
  const nameSplited = imgSplited[imgSplited.length - 1].split('.');
  const folderSplited = imgSplited[imgSplited.length - 3];
  const subFolderSplited = imgSplited[imgSplited.length - 2];
  const public_id = `${folderSplited}/${subFolderSplited}/${nameSplited[0]}`;
  cloudinary.uploader.destroy(public_id, () => {
    console.log('Image delete in cloudinary');
  });
};

const configCloudinary = () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    api_key: process.env.CLOUDINARY_API_KEY,
  });
};

module.exports = {
  uploadUser,
  deleteImgCloudinary,
  configCloudinary,
  uploadIngredient,
  uploadRecipe,
};

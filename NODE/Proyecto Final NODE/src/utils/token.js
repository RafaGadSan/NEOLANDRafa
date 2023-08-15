// archivo en utils -> token.js

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const generateToken = (id, email) => {
  // si no tenemos usuario o email lanzamos un error
  if (!id || !email) {
    throw new Error('Email or id are missing');
  }
  // Utilizamos sign para registranos y le añadimos la expiracion de 1d
  return jwt.sign({ id, email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

const verifyToken = (token) => {
  // si no nos envia el token mandamos un error
  if (!token) {
    throw new Error('Token is missing');
  }
  // llamamo a la funcion de verificar el token --> esta funcion se encuentra en util
  return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = {
  generateToken,
  verifyToken,
};

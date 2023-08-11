//! importaciones

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

//! funciones

const generateToken = (id, email) => {
  if (!id || !email) {
    throw new Error('Email or id are missing');
  }

  return jwt.sign({ id, email }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

const verifyToken = (token) => {
  if (!token) throw new Error('Token is missing');

  return jwt.verify(token, process.env.JWT_SECRET);
};

//! exportarlas

module.exports = {
  generateToken,
  verifyToken,
};

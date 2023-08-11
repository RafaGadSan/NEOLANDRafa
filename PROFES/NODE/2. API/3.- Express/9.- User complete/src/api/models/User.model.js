//! ----- IMPORTACIONES
const bcrypt = require('bcrypt');
const validator = require('validator');
const mongoose = require('mongoose');

//! ----- MONGOOSE SCHEMA

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, 'Email not valid'],
    },
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword],
    },
    gender: {
      type: String,
      enum: ['hombre', 'mujer', 'otros'],
      required: true,
    },
    rol: {
      type: String,
      enum: ['admin', 'user', 'superadmin'],
      default: 'user',
    },
    confirmationCode: {
      type: Number,
      required: true,
    },
    check: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
    charactersFav: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
    moviesFav: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
  },
  {
    timestamps: true,
  }
);

//! --------- PRESAVE PARA ENCRYPTAR LA CONTRASEÑA

UserSchema.pre('save', async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next('Error hashing password', error);
  }
});

//! ----- CREAR MODELO
const User = mongoose.model('User', UserSchema);

//! ------ EXPORTARLO

module.exports = User;

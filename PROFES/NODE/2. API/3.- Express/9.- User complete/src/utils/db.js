//! ------------------------- requerirnos dotenv - mongoose
const dotenv = require('dotenv');
const mongoose = require('mongoose');

//! --------------------------nos configuramos dotenv
dotenv.config();

//! ------------------------- nos traemos del env la mongo_ui

const MONGO_URI = process.env.MONGO_URI;

//! -------------------------- nos creamos la funcion connect y la exportamos para utilizarla en el index
const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      /// es para hacer que la URL de MONGO se parsee
      useNewUrlParser: true,
      // convertir los caracteres especiales
      useUnifiedTopology: true,
    });

    const { name, host } = db.connection;

    console.log(
      `Conectada la DB 👌  en el host: ${host} con el nombre: ${name}`
    );
  } catch (error) {
    console.log('No se ha conectado la db 💔', error);
  }
};

module.exports = { connect };

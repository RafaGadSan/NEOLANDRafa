const moviesDataSet = [
  {
    title: "The Batman",
    poster:
      "https://xl.movieposterdb.com/22_02/2022/1877830/xl_1877830_764432ad.jpg?v=2023-02-19%2023:41:01",
    year: 2022,
    released: true,
  },
  {
    title: "Dune",
    poster:
      "https://xl.movieposterdb.com/21_08/2021/1160419/xl_1160419_565d3d10.jpg?v=2023-01-06%2017:55:10",
    year: 2022,
    released: true,
  },
  {
    title: "Jaws",
    poster:
      "https://xl.movieposterdb.com/08_01/1975/73195/xl_73195_04c15a8a.jpg?v=2023-02-25%2009:28:24",
    year: 1975,
    released: false,
  },
];

//! ------------------------------------ requerimos mongoose, dotenv y lo configuramos
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

//! ---------------------------------- recorrer el array y convertir cada objeto en una instancia del modelo
const Movie = require("../../api/models/Movie.model");
const MoviesDocuments = moviesDataSet.map((item) => new Movie(item));

//! ---------------------------------- funcion  que crea la semilla y la inyecta

const MONGO = process.env.MONGO_URI;
const createSeed = () => {
  mongoose
    .connect(MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      // te da todos los elementos de la bdo -- en ES6 CUIDADADOOOOOOO DA SOLO EL PRIMER ELEMENTO FIND()
      const allMovies = await Movie.find();
      if (allMovies.length > 0) {
        await Movie.collection.drop();
        console.log("coleccion borrada");
      }
    })
    .catch((error) =>
      console.log("error al borrar la coleccion existente", error)
    )
    .then(async () => {
      await Movie.insertMany(MoviesDocuments);
      console.log("semilla plantada 💚");
    })
    .catch((error) => {
      console.log("error en el plantado de la semilla 💔", error);
    })
    .finally(() => {
      mongoose.disconnect();
    });
};

//! ---------------------------------- exporta la funcion

module.exports = createSeed;

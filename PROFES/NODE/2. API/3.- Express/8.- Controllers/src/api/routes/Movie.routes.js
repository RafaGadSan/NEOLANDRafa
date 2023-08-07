const {
  createMovie,
  addCharacter,
  changeView,
  deleteMovie,
} = require("../controllers/Movie.controllers");

const MovieRoutes = require("express").Router();

MovieRoutes.post("/", createMovie);
MovieRoutes.patch("/add/:id", addCharacter);
MovieRoutes.patch("/update/view/:id", changeView);
MovieRoutes.delete("/:id", deleteMovie);

module.exports = MovieRoutes;

const { upload } = require("../../middleware/files.middleware");
const { create } = require("../models/Character.model");

const CharacterRoutes = require("express").Router();

CharacterRoutes.post("/", create);

module.exports = CharacterRoutes;

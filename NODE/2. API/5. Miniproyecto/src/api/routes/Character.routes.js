const { upload } = require("../../middleware/files.middleware");
const { createCharacter } = require("../controllers/Character.controller");

const express = require("express");

const CharacterRoutes = express.Router();

CharacterRoutes.post("/create", upload.single("image"), createCharacter);

module.exports = CharacterRoutes;

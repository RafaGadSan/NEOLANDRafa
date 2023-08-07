const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CharacterSchema = new Schema(
  {
    name: { type: String, unique: true, require: true },
    gender: {
      type: String,
      enum: ["hombre", "mujer", "otros"],
      require: true,
    },
    image: {
      type: String,
    },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", CharacterSchema);

module.exports = Character;

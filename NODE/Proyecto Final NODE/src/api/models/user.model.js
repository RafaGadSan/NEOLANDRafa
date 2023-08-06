const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      validate: [validator.isEmail, "Email not valid"],
    },
    name: { type: String, required: true, trim: true, unique: true },
    password: {
      type: String,
      required: true,
      trim: true,
      validate: [validator.isStrongPassword],
      minlength: [8, "Min 8 characters"],
    },
    gender: {
      type: String,
      enum: ["hombre", "mujer"],
      required: true,
    },
    rol: {
      type: String,
      enum: ["admin", "user"],
      required: true,
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
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    next("Error hashing password", error);
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

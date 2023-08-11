//!IMPORTACIONES
const bcrypt = require("bcrypt")
const validator = require("validator")
const mongoose = require("mongoose")

//!MONGOOSE SCHEMA

const UserSchema = new mongoose.Schema(
    {
    email: {
    type: String,
    require: true,
    trim: true,
    unique:true,
    validate[validator.isEmail, "Email not valid"],
    }
    },
    name:{

    }
)

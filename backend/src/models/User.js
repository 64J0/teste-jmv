const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  cpf: {
    type: String,
    unique: true,
    required: true
  },
  rg: {
    type: String,
    unique: true,
    required: true
  },
  nascimento: {
    type: Date,
    required: true
  },
  telefones: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  senha: {
    type: String,
    required: true
  },
  permission: {
    type: String,
    enum: ["sudo", "admin", "normal"],
    default: "normal",
    required: true
  }
});

module.exports = mongoose.model("User", UserSchema);
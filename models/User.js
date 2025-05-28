const mongoose = require("mongoose");

// Définir le schéma de l'utilisateur
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
});

// Exporter le modèle
module.exports = mongoose.model("User", UserSchema);

require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Middleware pour lire le body des requêtes
app.use(express.json());

// Connexion à MongoDB avec URI à la racine...
console.log("MONGO_URI:", process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Erreur de connexion à MongoDB:", err));

// Port d'écoute
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Le serveur fonctionne sur le port ${PORT}`)
);
console.log(`http://localhost:5000/`);

// Importer le modèle User
const User = require("./models/User");

// Route GET : renvoie tous les utilisateurs
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route POST : ajouter un nouvel utilisateur
app.post("/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route PUT : modifier un utilisateur par son identifiant
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route DELETE : supprimer un utilisateur par son identifiant
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndRemove(req.params.id);
    res.json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

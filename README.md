﻿# API-REST-Checkpoint
Dans ce point de contrôle, vous exécuterez une série d’instructions guidées pour créer une API REST en manipulant votre base de données avec mongoose.

PS : n'oubliez pas de commenter votre code avant de le soumettre.

Instructions

Démarrer un nouveau projet Node JS avec « npm init »
Installez la mangouste et express et .env
Configurer les variables d'environnement avec .env
Démarrez un serveur avec express dans le fichier server.js
Connectez votre base de données localement ou avec Mongo Atlas
La structure du dossier devrait ressembler à ceci :
config/.env 

Server.js

     7. Créez un dossier models et un fichier User.js dedans 

     8. Dans User.js, vous devez définir un schéma mongoose et exporter le modèle, vous l'utiliserez dans le server.js

     9. La structure du dossier doit être comme ceci : 

config/.env 

modèles/User.js

Server.js

     10. Dans le server.js, créez quatre routes : 

       OBTENIR : RETOURNER TOUS LES UTILISATEURS 

       POSTE : AJOUTER UN NOUVEL UTILISATEUR À LA BASE DE DONNÉES 

       PUT : MODIFIER UN UTILISATEUR PAR ID 

       SUPPRIMER : SUPPRIMER UN UTILISATEUR PAR ID 

NB : dans chaque fonction de rappel, vous utiliserez des méthodes mongoose pour manipuler vos données et les renvoyer dans la réponse 

     11. Utilisez le facteur pour tester chaque itinéraire.

                 

  Liens utiles : 

.env : https://www.npmjs.com/package/dotenv
Express js : https://expressjs.com/
Req.params et req.query : https://coursework.vschool.io/express-params-and-query/
Mangouste : https://mongoosejs.com/
API REST : https://www.youtube.com/watch?v=SLwpqD8n3d0

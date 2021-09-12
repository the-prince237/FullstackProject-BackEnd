const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const Thing = require("./models/thing");

mongoose.connect('mongodb+srv://myUser:albafikaforMongodb@myfirstcluster.8hb5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //permet d'accéder à notre API depuis n'importe quel origine (*)
    res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    //permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin, X-Requested-With, etc)
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    //permet d'envoyer des requêtes avec les méthodes mentionnées (GET, POST, etc.).
    next();
});

app.use(bodyParser.json());

app.post("/api/stuff", (req, res, next) => {
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing.save()
        .then(() => res.status(201).json({ message: "objet enregistré !" }))
        .catch(error => res.status(400).json({ error }));
});

app.get("/api/stuff/:id", (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({ error }));
});

app.put("/api/stuff/:id", (req, res, next) => {
    Thing.updateOne({ _id: req.params.id }, {...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "objet modifié !" }))
        .catch(error => res.status(400).json({ error }));
});

app.delete("/api/stuff/:id", (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: "objet supprimé !" }))
        .catch(error => res.status(400).json({ error }));
});

app.get("/api/stuff", (req, res, next) => {
    Thing.find()
        .then(things => res.status(200).json(things))
        .catch(error => res.status(400).json({ error }));
});
//nous venons de créer dans notre app un tableau renfermant des modèles de données corresondants à ce que doit recevoir notre application frontend.
//nous l'appellons ensuite en reponse par notre serveur.
//Notons que l'argument "/api/stuff" est le chemin d'accès donné dans notre frontend, celui avec lequel il doit communiquer. en extention, ce chemin est "http://localhost:3000/api/stuff" 
module.exports = app;
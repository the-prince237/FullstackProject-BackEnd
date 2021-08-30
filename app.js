//nous importons le package express après avoir installé express à partir de notre dossier backend. 
const express = require("express");


const app = express();//nous créons une application express grace à la méthode express()

//nous créons des middlewares, affectés des arguments req, res, et next.
// ici, la fonction next permet de passer au middleware suivant après avoir éxécuté celui en cours 
app.use((req, res, next) => {
    console.log("requête reçue !");
    next();
});

app.use((req, res, next) => {
    res.status(201);
    next();
});

app.use((req, res, next) => {
    res.json({message : "votre requête a bien été reçue !"});
    next();
});

app.use((req, res, next) => {
    console.log("reponse envoyée avec succès !");
});

module.exports = app;
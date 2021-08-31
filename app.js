//nous importons le package express après avoir installé express à partir de notre dossier backend. 
const express = require("express");


const app = express(); //nous créons une application express grace à la méthode express()

//nous créons des middlewares, affectés des arguments req, res, et next.
// ici, la fonction next permet de passer au middleware suivant après avoir éxécuté celui en cours 
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); //permet d'accéder à notre API depuis n'importe quel origine (*)
    res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    //permet d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin, X-Requested-With, etc)
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    //permet d'envoyer des requêtes avec les méthodes mentionnées (GET, POST, etc.).
    next();
});

app.use("/api/stuff", (req, res, next) => {
    const stuff = [{
            _id: "oeihfzeoi",
            title: "montre swag",
            description: "Ne retenez pas votre bon goût, restez les roix du swag",
            imageUrl: "https://cdn.pixabay.com/photo/2018/01/18/19/06/time-3091031_960_720.jpg",
            price: 4900,
            userId: "qsomihvqios",
        },
        {
            _id: "oeihfzeomoihi",
            title: "chaussures chic",
            description: "Restez chics en toutes circonstances",
            imageUrl: "https://cdn.pixabay.com/photo/2020/03/28/16/18/industry-4977635_960_720.jpg",
            price: 2900,
            userId: "qsomihvqios",
        },
        {
            _id: "oeihfzeomoiha",
            title: "t-shirt simple et stylé",
            description: "Retrouvez la simplicité, dans les petites choses",
            imageUrl: "data:image/jpeg;base64,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",
            price: 1000,
            userId: "qsomihvqios",
        },
    ];
    res.status(200).json(stuff);
});
//nous venons de créer dans notre app un tableau renfermant des modèles de données corresondants à ce que doit recevoir notre application frontend.
//nous l'appellons ensuite en reponse par notre serveur.
//Notons que l'argument "/api/stuff" est le chemin d'accès donné dans notre frontend, celui avec lequel il doit communiquer. en extention, ce chemin est "http://localhost:3000/api/stuff" 
module.exports = app;
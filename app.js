const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const stuffRoutes = require("./routes/stuff");

mongoose.connect('mongodb+srv://myUser:albafikaforMongodb@myfirstcluster.8hb5y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    next();
});

app.use(bodyParser.json());

app.use("/api/stuff", stuffRoutes);

module.exports = app;
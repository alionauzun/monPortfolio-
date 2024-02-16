//----- L'application express -----//

const express = require("express");
//importation du package body-parser pour analyser les requêtes entrantes et les rendre accessibles dans req.body 
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//j'implémente CORS pour que le front-end effectuer des appels vers l'application en toute sécurité
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use((req, res) => {
    res.json({ message: "Votre requête a bien été reçue !" });
});


module.exports = app;
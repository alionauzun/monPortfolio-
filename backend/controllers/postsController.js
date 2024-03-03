// 2. Configurer les contrôleurs dans controllers/postsController.js

// const { post } = require("../app");
const Post = require("../models/post");

// Importation du package fs pour la gestion des fichiers entrants et sortants du serveur
const fs = require("fs");

// Importer le modèle d'article si nécessaire

// Contrôleur pour récupérer tous les articles
exports.getAllPosts = (req, res,next) => {
    // Logique pour récupérer tous les articles depuis la base de données
    Post.find()
    .then((posts) => 
        res.status(200).json(posts))
    .catch((error) => 
        res.status(400).json({
            error: error
        }));
};


// Contrôleur pour récupérer un article par son ID
exports.getPostById = (req, res, next) => {
    Post.findOne({
        _id: req.params.id,
    })
    .then((post) => res.status(200).json(post))
    .catch((error) => res.status(404).json({ error }));;
};

// Contrôleur pour créer un nouvel article
exports.createPost = (req, res, next) => {
    // Logique pour créer un nouvel article dans la base de données
    const postObject = JSON.parse(req.body.post);

        //L'utilisation du mot-clé new avec un modèle Mongoose crée par défaut un champ_id, mais on doit utiliser le paramètre id de la requête pour configurer le Post avec le même _id qu'avant.
    delete postObject._id;

    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
post.save()
    .then(() => {
        res.status(201).json({message: 'Article enregistré !'});
    })
    .catch((error) => {
        res.status(500).json({error});
        // console.log(error);
    });
};

// Contrôleur pour modification d'un objet post
exports.modifyPost = (req, res, next) => {
    const postObject = req.file? {
        ...JSON.parse(req.body.post),
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    } : { ...req.body };
    delete postObject._id;
    Post.findOne({ _id: req.params.id })
    .then((post) => {
        if (!post) {
            return res.status(404).json({ error: 'Article non trouvé !' });
        }
    // Logique pour mettre à jour un article existant dans la base de données
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Article modifié !' }))
    .catch((error) => 
        res.status(400).json({ error }));
    })
    .catch((error) => {
        res.status(500).json({ error });
});
};
//le premier argument est l'objet de comparaison pour trouver la post à modifier donc qui a l'id est egale a l'id qui est envoier dans les parametres de la requete et le deuxième argument c'est les nouvelles versions de l'objet post


// Contrôleur pour supprimer un article existant
exports.deletePost = (req, res,next) => {
    Post.findOne({_id: req.paramas.id})
    .then(post => {
            const filename = post.imageUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                Post.deleteOne({_id: req.params.id})
                    .then(() => { res.status(200).json({message: 'Article supprimé !'})})
                    .catch(error => res.status(401).json({ error }));
            });
        }
    )
    .catch( error => {
        res.status(500).json({ error });
    });
};
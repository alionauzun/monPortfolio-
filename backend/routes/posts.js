//--- //
// 1. Configurer les routes dans routes/posts.js

const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const postsCtrl = require('../controllers/postsController');

// Route pour récupérer tous les articles
router.get('/', postsCtrl.getAllPosts);

// Route pour récupérer un article par son ID
router.get('/:id', postsCtrl.getPostById);

// Route pour créer un nouvel article
router.post('/', multer, postsCtrl.createPost);

// Route pour mettre à jour un article existant
router.put('/:id', postsCtrl.modifyPost);

// Route pour supprimer un article existant
router.delete('/:id', postsCtrl.deletePost);

module.exports = router;

const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const articleCtrl = require('../controllers/article');

router.post('/', auth, multer, articleCtrl.createArticle);
router.get('/', articleCtrl.getAllArticles);
router.get('/:id', articleCtrl.getOneArticle);
router.get('/country/:country', articleCtrl.getCountryArticles);
router.put('/:id', auth, multer, articleCtrl.modifyArticle);
router.delete('/:id', auth, articleCtrl.deleteArticle);

module.exports = router;
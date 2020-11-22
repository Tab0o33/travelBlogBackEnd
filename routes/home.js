const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/home');

router.get('/introduction', homeCtrl.getIntro);

router.post('/comment', homeCtrl.createComment);
router.get('/comment', homeCtrl.getAllComments);

module.exports = router;
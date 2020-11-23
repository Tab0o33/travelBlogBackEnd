const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/home');

router.get('/introduction', homeCtrl.getIntro);

router.post('/comment', homeCtrl.createComment);
router.get('/comment', homeCtrl.getAllComments);

router.patch('/comment/:id/subComments', homeCtrl.createSubComment);

module.exports = router;
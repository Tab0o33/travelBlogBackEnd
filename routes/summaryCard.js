const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

const summaryCardCtrl = require('../controllers/summaryCard');

router.post('/', auth, multer, summaryCardCtrl.createSummaryCard);
router.get('/', summaryCardCtrl.getAllSummaryCards);
router.get('/:id', summaryCardCtrl.getOneSummaryCard);
router.put('/:id', auth, multer, summaryCardCtrl.modifySummaryCard);
router.delete('/:id', auth, summaryCardCtrl.deleteSummaryCard);

module.exports = router;
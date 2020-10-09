const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const summaryCardCtrl = require('../controllers/summaryCard');

router.post('/', auth, summaryCardCtrl.createSummaryCard);
router.get('/', summaryCardCtrl.getAllSummaryCards);
router.get('/:id', summaryCardCtrl.getOneSummaryCard);
router.put('/:id', auth, summaryCardCtrl.modifySummaryCard);
router.delete('/:id', auth, summaryCardCtrl.deleteSummaryCard);

module.exports = router;
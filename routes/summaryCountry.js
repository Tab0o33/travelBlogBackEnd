const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const summaryCountryCtrl = require('../controllers/summaryCountry');

router.post('/', auth, summaryCountryCtrl.createSummaryCountry);
router.get('/', auth, summaryCountryCtrl.getAllSummaryCountries);

module.exports = router;

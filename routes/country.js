const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const countryCtrl = require('../controllers/country');

router.post('/', auth, countryCtrl.createCountry);
router.get('/', auth, countryCtrl.getAllCountries);

module.exports = router;

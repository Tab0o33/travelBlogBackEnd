const mongoose = require('mongoose');

const summaryCountrySchema = mongoose.Schema({
  label: { type: String, required: true },
  position: { type: Number, required: true },
});

module.exports = mongoose.model('SummaryCountry', summaryCountrySchema);

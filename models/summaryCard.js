const mongoose = require('mongoose');

const summaryCardSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  imageAlt: { type: String, required: true },
  firstDay: { type: String, required: true },
  lastDay: { type: String, required: true },
  country: { type: String, required: true },
});

module.exports = mongoose.model('SummaryCard', summaryCardSchema);
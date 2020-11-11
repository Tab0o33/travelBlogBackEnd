const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    country: { type: String, required: true },
    position: { type: Number, required: true },
    name: { type: String, required: true },
    firstDay: { type: String, required: true },
    lastDay: { type: String, required: true },
    mapImageUrl: { type: String, required: true },
    mapImageAlt: { type: String, required: true }
});

module.exports = mongoose.model('Article', ArticleSchema);
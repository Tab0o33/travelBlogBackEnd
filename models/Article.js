const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
    country: { type: String, required: true },
    position: { type: Number, required: true },
    name: { type: String, required: true },
    firstDay: { type: String, required: true },
    lastDay: { type: String, required: true },
    mapImageUrl: { type: String, required: true },
    mapImageAlt: { type: String, required: true },
    subparts: {
        type: [{
            position: { type: Number, required: true },
            title: { type: String, required: true },
            contents: {
                type: [{
                    position: { type: Number, required: true },
                    type: { type: String, required: true },
                    value: { type: String, required: false },
                    url: { type: String, required: false },
                    alt: { type: String, required: false },
                    name: { type: String, required: false },
                    caption: { type: String, required: false }
                }], required: true
            },
        }], required: true
    }
});

module.exports = mongoose.model('Article', ArticleSchema);
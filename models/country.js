const mongoose = require('mongoose');

const countrySchema = mongoose.Schema({
    code: { type: String, required: true },
    label: { type: String, required: true },
    position: { type: Number, required: true },
});

module.exports = mongoose.model('Country', countrySchema);

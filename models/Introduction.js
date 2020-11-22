const mongoose = require('mongoose');

const IntroductionSchema = mongoose.Schema({
    message: { type: String, required: true }
});

module.exports = mongoose.model('Introduction', IntroductionSchema);
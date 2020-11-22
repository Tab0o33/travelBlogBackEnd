const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    pseudo: { type: String, required: true },
    message: { type: String, required: true },
    postDate: { type: Date, required: true },
    isAdminPost: { type: Boolean, required: true }
});

module.exports = mongoose.model('Comment', CommentSchema);
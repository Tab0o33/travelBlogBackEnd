const Introduction = require('../models/Introduction');
const Comment = require('../models/Comment');

exports.getIntro = (req, res, next) => {
    Introduction.find()
        .then(intros => res.status(200).json(intros[0].message))
        .catch(error => res.status(404).json({ error }));
};

exports.createComment = async (req, res, next) => {
    const comment = new Comment({
        pseudo: req.body.pseudo,
        message: req.body.message,
        postDate: req.body.postDate,
        isAdminPost: req.body.isAdminPost,
        subComments: []
    })
    comment.save()
        .then(() => res.status(201).json({ message: 'Commentaire enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllComments = (req, res, next) => {
    Comment.find()
        .then(comments => {
            var comments = JSON.parse(JSON.stringify(comments))
            comments.forEach(c => {
                c.id = c._id;
                delete c._id;
                delete c.__v;
            });
            res.status(200).json(comments);
        })
        .catch(error => res.status(400).json({ error }));
};

exports.createSubComment = async (req, res, next) => {
    Comment.findOneAndUpdate(
        { _id: req.params.id },
        { $push: { "subComments": { ...req.body } } },
        { new: true }
    )
        .then(() => res.status(201).json({ message: 'Sous-commentaire enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};
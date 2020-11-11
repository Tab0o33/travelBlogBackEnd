const Article = require('../models/Article');


exports.createArticle = async (req, res, next) => {
    const articleObject = JSON.parse(req.body.article);
    const articlesDTO = await Article.find({ country: articleObject.country });
    delete articleObject._id;
    const article = new Article({
        ...articleObject,
        position: articlesDTO.length + 1,
        mapImageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    article.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllArticles = (req, res, next) => {

};

exports.getOneArticle = (req, res, next) => {
    Article.findOne({ _id: req.params.id })
        .then(article => {
            var article = article.toObject();
            article.id = article._id;
            delete article._id;
            delete article.__v;
            res.status(200).json(article);
        })
        .catch(error => res.status(404).json({ error }));
};

exports.getCountryArticles = (req, res, next) => {
    Article.find({ country: req.params.country })
        .then(articles => {
            var articles = JSON.parse(JSON.stringify(articles))
            articles.forEach(a => {
                a.id = a._id;
                delete a._id;
                delete a.__v;
            });
            res.status(200).json(articles);

        })
        .catch(error => res.status(404).json({ error }));
};

exports.modifyArticle = (req, res, next) => {

};

exports.deleteArticle = (req, res, next) => {
    Article.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
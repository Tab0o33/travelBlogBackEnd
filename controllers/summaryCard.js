const SummaryCard = require('../models/SummaryCard');


exports.createSummaryCard = (req, res, next) => {
    const summaryCardObject = JSON.parse(req.body.summaryCard);
    delete summaryCardObject._id;
    const summaryCard = new SummaryCard({
        ...summaryCardObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    summaryCard.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllSummaryCards = (req, res, next) => {
    SummaryCard.find()
        .then(summaryCards => {
            var summaryCards = JSON.parse(JSON.stringify(summaryCards))
            summaryCards.forEach(sc => {
                sc.id = sc._id;
                delete sc._id;
                delete sc.__v;
            });
            res.status(200).json(summaryCards);
        })
        .catch(error => res.status(400).json({ error }));
};

exports.getOneSummaryCard = (req, res, next) => {
    SummaryCard.findOne({ _id: req.params.id })
        .then(summaryCard => {
            var summaryCard = summaryCard.toObject();
            summaryCard.id = summaryCard._id;
            delete summaryCard._id;
            delete summaryCard.__v;
            res.status(200).json(summaryCard);
        })
        .catch(error => res.status(404).json({ error }));
};

exports.modifySummaryCard = (req, res, next) => {
    const summaryCardObject = req.file ?
        {
            ...JSON.parse(req.body.summaryCard),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body };
    SummaryCard.updateOne({ _id: req.params.id }, { ...summaryCardObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.deleteSummaryCard = (req, res, next) => {
    SummaryCard.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
        .catch(error => res.status(400).json({ error }));
};
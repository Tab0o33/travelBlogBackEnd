const SummaryCard = require('../models/SummaryCard');


exports.createSummaryCard = (req, res, next) => {
  delete req.body._id;
  const summaryCard = new SummaryCard({
    ...req.body
  });
  summaryCard.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllSummaryCards = (req, res, next) => {
  SummaryCard.find()
    .then(summaryCards => res.status(200).json(summaryCards))
    .catch(error => res.status(400).json({ error }));
};

exports.getOneSummaryCard = (req, res, next) => {
  SummaryCard.findOne({ _id: req.params.id })
    .then(summaryCard => res.status(200).json(summaryCard))
    .catch(error => res.status(404).json({ error }));
};

exports.modifySummaryCard = (req, res, next) => {
  SummaryCard.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.deleteSummaryCard = (req, res, next) => {
  SummaryCard.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
    .catch(error => res.status(400).json({ error }));
};
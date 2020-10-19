const SummaryCountry = require('../models/SummaryCountry');


exports.createSummaryCountry = (req, res, next) => {
  const summaryCountry = new SummaryCountry({
    label: req.body.label,
    position: req.body.position
  });
  summaryCountry.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
    .catch(error => res.status(400).json({ error }));
};

exports.getAllSummaryCountries = (req, res, next) => {
  SummaryCountry.find()
    .then(summaryCountries => res.status(200).json(summaryCountries))
    .catch(error => res.status(400).json({ error }));
};

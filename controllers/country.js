const Country = require('../models/Country');


exports.createCountry = (req, res, next) => {
    const country = new Country({
        code: req.body.code,
        label: req.body.label,
        position: req.body.position
    });
    country.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getAllCountries = (req, res, next) => {
    Country.find()
        .then(countries => res.status(200).json(countries))
        .catch(error => res.status(400).json({ error }));
};

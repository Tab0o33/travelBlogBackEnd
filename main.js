const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const summaryCountryRoutes = require('./routes/summaryCountry');
const summaryCardRoutes = require('./routes/summaryCard');
const userRoutes = require('./routes/user');
const articleRoutes = require('./routes/article');

const credentials = require('./credentials');

mongoose.connect(`mongodb+srv://${credentials.user}:${credentials.password}@${credentials.clusterName}.dtfhq.mongodb.net/${credentials.dataBaseName}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/api/summaryCountry', summaryCountryRoutes);
app.use('/api/summaryCard', summaryCardRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/article', articleRoutes);

module.exports = app;

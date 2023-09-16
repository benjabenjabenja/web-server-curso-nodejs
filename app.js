const express = require('express');
const { log } = require('./helpers/log');
const app = express();
const hbs = require('hbs');
require('dotenv').config();
const { PORT } = process.env;
const PUBLIC = 'public';

const cb_error = (err) => log(err);

hbs.registerPartials(__dirname + '/views/partials', cb_error);

// TODO: require('hbs)
app.set('view engine', 'hbs');

// middelwares
app.use(express.static(PUBLIC));

// callbacks
const get_default_info = (req, res) => {
    // res.sendFile(`${__dirname}/public/index.html`);
    res.render('home', {
        nombre: 'Benja',
        titulo: 'Curso NodeJS'
    });
}
const get_generic = (req, res) => {
    // res.sendFile(`${__dirname}/public/generic.html`);
    res.render('generic', {
        nombre: 'Benja',
        titulo: 'Generic Page'
    });
}
const get_elements = (req, res) => {
    // res.sendFile(`${__dirname}/public/elements.html`);
    res.render('elements', {
        nombre: 'Benja',
        titulo: 'Elements Page'
    });
}
const get_not_found = (req, res) => res.send('404 | Not Found');

// routes
app.get('/', get_default_info);
app.get('/home', get_default_info);
app.get(`/generic`, get_generic);
app.get(`/elements`, get_elements);
app.get('*', get_not_found);

// LISTEN PROTS
app.listen(PORT, () => {
    log(`APP - LISTENING AT http://localhost: ${PORT}`);
});
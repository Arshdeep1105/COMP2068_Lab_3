'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function (req, res) {
    res.render('index', { title: 'Welcome to my family page' });
});

router.get('/arshdeep', function (req, res) {
    res.render('arshdeep', { title: 'Areshdeep\'s info' });
});

router.get('/balvinder', function (req, res) {
    res.render('balvinder', { title: 'Balvinder\'s info' });
});

router.get('/gurdev', function (req, res) {
    res.render('gurdev', { title: 'Gurdev\'s info' });
});

router.get('/mandeep', function (req, res) {
    res.render('mandeep', { title: 'Mandeep\'s info' });
});
module.exports = router;

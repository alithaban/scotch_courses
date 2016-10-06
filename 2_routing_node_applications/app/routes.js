/**
 * Created by root on 6/10/16.
 */

var express = require('express'),
    router = express.Router(),
    path = require('path');

// Expprts the router
module.exports = router;

// Apply the routes to the router
// Set routes
router.get('/', showHome);
router.get('/about', showAbout);
router.get('/contact', showContactForm);
router.post('/contact', processContactForm);
router.get('/:username/:post_slug', showProfile);
router.use(show404);

function showHome(req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
}

function showAbout(req, res) {
    res.json({message:'I\'m the about page'});
}

function showContactForm(req, res) {
    res.sendFile(path.join(__dirname,'../contact.html'));
}

function processContactForm(req, res) {
    res.send('Hello ' + req.body.name);
}

function showProfile(req, res) {
    console.log(req.params);
    res.send(' Written by ' + req.params.username + ', ' + req.params.post_slug);
}


function show404(req, res) {
    res.status(404);
    res.sendFile(path.join(__dirname,'../404.html'));
}

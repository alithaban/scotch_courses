/**
 * Created by root on 7/10/16.
 */
path = require('path'),

module.exports = {
    showHome:showHome,
    showAbout:showAbout,
    showContactForm:showContactForm,
    processContactForm:processContactForm,
    showProfile:showProfile,
    show404:show404

}

function showHome(req, res) {
    res.sendFile(path.join(__dirname, '../../index.html'));
}

function showAbout(req, res) {
    res.json({message:'I\'m the about page'});
}

function showContactForm(req, res) {
    res.sendFile(path.join(__dirname,'../../contact.html'));
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
    res.sendFile(path.join(__dirname,'../../404.html'));
}
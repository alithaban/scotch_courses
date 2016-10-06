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
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../index.html'));
})

router.get('/about', function (req, res) {
    res.json({message:'I\'m the about page'});
})

router.route('/contact').get(function (req, res) {
    res.sendFile(path.join(__dirname,'../contact.html'));
}).post(function (req, res) {
    res.send('Hello ' + req.body.name);
})

router.get('/:username/:post_slug', function (req,res) {
    console.log(req.params);
    res.send(' Written by ' + req.params.username + ', ' + req.params.post_slug);
})

router.use(function (req, res, next) {
    res.status(404);
    res.sendFile(path.join(__dirname,'../404.html'));
})

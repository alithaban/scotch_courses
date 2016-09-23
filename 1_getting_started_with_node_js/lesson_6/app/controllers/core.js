/**
 * Created by root on 20/09/16.
 */
var db = require('../util/db.js');

exports.home = function (req, res) {
    db.loadDatabases({}, function () {
        res.render('index', {searches:db.getCollection('searches').data});
    })
}

exports.top = function (req, res) {
    db.loadDatabases({}, function () {
        res.render('top', {terms: db.getCollection('terms').data});
    })
}
/**
 * Created by root on 20/09/16.
 */
var db = require('../util/db.js');
var client = require('../util/twitter');

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

exports.results = function (req, res) {
   var query = req.query.q;

    if(query){
        db.getCollection('searches').insert({term:query});
        db.saveDatabase();

        client.get('search/tweets',{q:query},function (error, tweets, response) {
            res.render('results', {query:query, tweets:tweets._statuses});
        })
    }
    else
        res.send('Error');
}
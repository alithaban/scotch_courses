/**
 * Created by root on 20/09/16.
 */
var loki = require('lokijs');

var db = new loki('db.json');

module.exports = db;
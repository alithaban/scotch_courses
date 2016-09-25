/**
 * Created by root on 20/09/16.
 */
require('dotenv').config();

var app = require('./app/server');

app.listen(8080, function () {
    console.log('The server is up and running');
})

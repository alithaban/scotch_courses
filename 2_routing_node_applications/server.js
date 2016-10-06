/**
 * Created by root on 29/09/16.
 */
var app = require('express')(),
    port = process.env.PORT_NUMBER || 8080,
    morgan = require('morgan'),
    bodyParser = require('body-parser');

//var router = require('./app/routes');
app.use(require('./app/routes'));

// Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));

//start the server
app.listen(port, function () {
    console.log('Te app is running');
})
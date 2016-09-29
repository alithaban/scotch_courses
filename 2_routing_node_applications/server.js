/**
 * Created by root on 29/09/16.
 */
var app = require('express')(),
    port = process.env.PORT_NUMBER || 8080,
    morgan = require('morgan');

// Configuration
app.use(morgan('dev'));
// Set routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.get('/about', function (req, res) {
    res.json({message:'I\'m the about page'});
})

app.get('/contact', function (req, res) {
    res.send('I\'m the contact');
})

//start the server
app.listen(port, function () {
    console.log('Te app is running');
})
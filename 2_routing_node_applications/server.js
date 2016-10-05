/**
 * Created by root on 29/09/16.
 */
var app = require('express')(),
    port = process.env.PORT_NUMBER || 8080,
    morgan = require('morgan'),
    bodyParser = require('body-parser');

// Configuration
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}));


// Set routes
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
})

app.use(authenticate);

app.get('/about', function (req, res) {
    res.json({message:'I\'m the about page'});
})

app.route('/contact').get(function (req, res) {
    res.sendFile(__dirname + '/contact.html');
}).post(function (req, res) {
    res.send('Hello ' + req.body.name);
})

app.get('/:username/:post_slug', function (req,res) {
    console.log(req.params);
    res.send(' Written by ' + req.params.username + ', ' + req.params.post_slug);
})

function authenticate(req,res, next){
    console.log('Authenticate is here');

    next();
}

function checkName(req,res,next){
    console.log(req.params);

    // Validate the user

    next();
}

//start the server
app.listen(port, function () {
    console.log('Te app is running');
})
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 5000);
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public/partials');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/public')));

app.use(bodyParser.json())

app.get('/', function(req, res) {
    res.render('index.html');
});

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port 5000')
});
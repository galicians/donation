            // dependencies
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

        // server config & middleware
app.set('port', process.env.PORT || 5000);
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public/partials');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json())


            // routes
app.get('/', function(req, res) {
    res.render('index.html');
});


server.listen(app.get('port'), function() {
    console.log('Express server listening on port 5000')
});


io.on('connection', function(socket) {
  
  console.log('a user connected');
  
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });

  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });

});
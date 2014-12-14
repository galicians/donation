            // dependencies
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var Sequelize = require('sequelize')

          // database connection using sequelize
if (env === 'production') {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
}
else {
  var sequelize = new Sequelize('example', process.env.USER, process.env.DB_PASSWORD, {
      dialect: "postgres",
      port: 5432
  });
}

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err)
    } else {
      console.log('Connection has been established successfully.')
    }
  })

sequelize.query("SELECT * FROM USERS").success(function(myTableRows) {
  console.log(myTableRows)
})

        // server config & middleware
app.set('port', process.env.PORT || 5000);
var env = process.env.NODE_ENV || "development";
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


            // socket.io server side
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
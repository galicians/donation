            // dependencies
var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var Sequelize = require('sequelize')

        // server config & middleware
app.set('port', process.env.PORT || 5000);
var env = process.env.NODE_ENV || "development";
app.engine('html', require('ejs').renderFile);
app.set('views', __dirname + '/public/partials');
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

          // database connection-sequelize
if (env === 'production') {
  var sequelize = new Sequelize(process.env.DATABASE_URL);
}
else {
  var sequelize = new Sequelize('donation', process.env.USER, process.env.DB_PASSWORD, {
      dialect: "postgres",
      port: 5432
  });
}

sequelize.query("SELECT * FROM USERS").success(function(myTableRows) {
  console.log(myTableRows)
})

var User = sequelize.define('user', {
  name: Sequelize.STRING,
  username: Sequelize.STRING,
  password: Sequelize.TEXT,
  chats: Sequelize.INTEGER
    });

 var Relationship = sequelize.define('relationship', {
    userid: Sequelize.INTEGER,
    friendid: Sequelize.INTEGER
  });




          // sequelize.sync();
sequelize
  .sync({ force: true })
  .complete(function(err) {
     if (!!err) {
       console.log('An error occurred while creating the table:', err)
     } else {
       console.log('It worked!')
     }
  })

            // routes
app.get('/', function(req, res) {
    res.render('index.html');
});

app.post('/newuser', function(req, res) {
  console.log(req.body)
  var user = req.body;
    User.create({ 
     name: user.name,
     username: user.username,
     password: user.password,
     chats: user.chats
                      })
});



        // server 
server.listen(app.get('port'), function() {
    console.log('Express server listening on port, ', app.get('port'))
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
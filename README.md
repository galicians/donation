<h2>doNation test</h2>

<h3>Stack:</h3>

<h4>Angular</h4>

<h4>Postgress</h4>

psql -c 'create database doNation;' -U username

<h4>Sequelize</h4>
Sequelize is a promise-based Node.js ORM for Postgres, MySQL, SQLite and MariaDB. It features solid transaction support, relations, read replication and more.

Sequelize will automatically add the attributes createdAt and updatedAt to the table, therfore this looks a perfect match for the requiremnt:
Each model needs a modified and created attribute on them.

I've created a json file to simulate the models in angular before creating the real models in postgres using sequelize.
I've used the $http built-in service to bring them on the controller and then displaying them in the view.
Once I've got a clearer picture of what the models should be I've just defined the db schema on the node server.

In order to create a maintainable application, I should put all the database logic into the models folder. In this way when the application gets fired up, sequelize will sync the models with the database and afterwards start the server. This way we don't clutter the application while making use of sequelize's features. I've avoided this step intentionally this step to keep the all the logic on the server. Later on this will be modified following the example on:
http://sequelizejs.com/articles/express

pending: once you start a chat with someone they shouldn't appear in the friends list anymore but only in the chats list
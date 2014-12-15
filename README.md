<h2>doNation test</h2>

<h3>Stack:</h3>

<h4>Angular & Bootstrap</h4>

<h4>Postgress</h4>

<h4>Node.js & Express & Socket.io</h4>

<h4>Sequelize</h4>

Sequelize is a promise-based Node.js ORM for Postgres. It features solid transaction support, relations, read replication and more.

Sequelize will automatically add the attributes createdAt and updatedAt to the table, therfore this looks a perfect match for the requiremnt:
Each model needs a modified and created attribute on them.

I've created a json file to simulate the models in angular before creating the real models in postgres using sequelize.
I've used the $http built-in service to bring them on the controller and then displaying them in the view.
Once I've got a clearer picture of what the models should be I've just defined the db schema on the node server.

In order to create a maintainable application, I should put all the database logic into the models folder. In this way when the application gets fired up, sequelize will sync the models with the database and afterwards start the server. This way we don't clutter the application while making use of sequelize's features. I've avoided this step intentionally this step to keep the all the logic on the server. Later on this will be modified following the example on:
http://sequelizejs.com/articles/express

<h4>Pending tasks:</h4>

- Requisite: once you start a chat with someone they shouldn't appear in the friends list anymore but only in the chats list
        The idea is to implement this on an angular controller modifying the $scope.users.friends with an angular event.

- Registering the users.
        The idea is to use [http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html] token authentication

- Testing:
        Angular unit tests --> karma + jasmine
        Angular E2E tests --> protractor + jasmine
        Server side testing --> mocha, chai and bluebird(promises)
        * Usually I would have written the test and them the code to make it pass. Due to lack of time and because the purpose of this app is to show familiary with specific concepts I choose to write the untested code. Not recommended in production quality apps.

- Server refactoring:
        Models should be moved to a module.

- Styling:
        Some css inline needs to be moved to main.css
        General improve of the front end style

<h3>To install this app on your local machine, just follow the steps below:
    
        1. git clone https://github.com/galicians/donation
        2. npm install
        3. bower install
        4. create database from command line: psql -c 'create database doNation;' -U username
        5. node server.js
        6. go to http://localhost:5000


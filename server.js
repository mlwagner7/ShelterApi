var expressServer = require('express')
var app = expressServer();
var port = process.env.port || 3000;
var bodyParser = require('body-parser');

var dbCreation = require('./Api/Database/Database.js');

console.log('DB Scripts ran');

console.log('Registering Routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./Api/routes/PetsRoutes');
routes(app);

app.listen(port);

console.log('Starting the doggy shelter API.')

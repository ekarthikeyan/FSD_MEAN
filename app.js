
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');  //default will look for index.js in the folder
//var setupController = require('./controllers/setupController').default;
var port = process.env.port || 3000;
var apiController = require('./controllers/apiController');

app.use('/assets', express.static(__dirname + '/public'));


app.set('view engine', 'ejs');
mongoose.connect(config.getDbConnectionString());


//setupController(app);
apiController(app);


app.use(function (err, req, res, next) {
    //console.error(err.stack)
    res.status(500).send('The requested Page is not available')
  })

app.listen(port);
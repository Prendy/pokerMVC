var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var router= require('./config/routes');

var path = require('path');

var port = process.env.PORT || 3000;

var db_url = process.env.MONGO_URL || 'ds041586.mlab.com:41586/skybetpoker';

var db_user = process.env.MONGO_USER || 'fbaig';

var db_password = process.env.MONGO_PASSWORD || 'password1';

var options = {
	user: db_user,
	pass: db_password

}

console.log('DB_URL ='+ db_url);
console.log('DB_OPTIONS =' + JSON.stringify(options));

mongoose.connect(db_url, options), function(){
	console.log("Database connected");
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());


app.use(bodyParser.json());


app.use('/api', router);

app.listen(port, function(){
	console.log("Express app is listening on port: " + port);
	console.log('Ready: DB_URL ='+ db_url);
	console.log('Ready: DB_OPTIONS =' + JSON.stringify(options));
});

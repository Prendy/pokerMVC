var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = requires('cors');

var app = express();
var router= require('./config/routes');

var path = require('path');

var port = process.env.PORT || 3000;

var options = {
	user: 'fbaig',
	pass: 'password1'

}

mongoose.connect('ds041586.mlab.com:41586/skybetpoker', options), function(){
	console.log("Database connected");
}
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors);


app.use(bodyParser.json());


app.use('/api', router);

app.listen(port, function(){
	console.log("Express app is listening on port: " + port);
});

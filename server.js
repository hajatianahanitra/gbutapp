/*
const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(process.env.PORT || 8080 , () =>
 console.log('All is ok! '))
*/

/**
 * Module dependencies.
 */
var express  = require('express');
//var connect = require('connect');
//var bodyParser = require('body-parser');
var app      = express();
var port     = process.env.PORT || 8080;

// Configuration
/*app.use(express.static('public'));
app.use(connect.logger('dev'));
app.use(connect.json());  
app.use(connect.urlencoded());
app.use(connect.bodyParser());
*/

//require('./routes/routes.js')(app);


app.get('/', function(req, res) {
		res.end("salu"); 
	});


app.listen(port);

console.log('The App runs on port ' + port);

"use strict";
var express = require('express');
var fs = require('fs');
var app = express();
var logger = require('./helper/logger');

var server = app.listen('3000', function () {
    var host = server.address().address;
    var port = server.address().port;
    logger.info('Server start at http://%s:%s', '0.0.0.0', 3000);
	//logger info, debug, error
});

// say hello!!
app.get('/hello', function(req, res){
    res.send(JSON.stringify({'hello': 'world !!!'}));
});

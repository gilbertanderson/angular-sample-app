var express = require('express');
var path = require('path');
var app = express();
// var pg = require('pg');
// var conString = "postgres://postgres:@10.72.6.143:5432/gilbertanderson";
// var client = new pg.Client(conString);

app.use(express.static(path.join(__dirname, process.env['base-dir'] ? process.env['base-dir'] : '../../public')));

app.get('/test', function (req, res) {
    res.send('Hello World!')
});

var server = app.listen(process.env.VCAP_APP_PORT || 5000, function () {
    console.log('Server started on port: ' + server.address().port);
});
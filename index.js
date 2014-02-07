var express = require('express');
var app = express();

app.use(express.static(__dirname + '/'));
app.use(express.directory(__dirname + '/'));

app.listen(process.env.PORT || 3000);
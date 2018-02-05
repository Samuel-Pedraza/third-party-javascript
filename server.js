var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/myproduct/123451', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8080);

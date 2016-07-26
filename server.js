var express = require('express');
var app = express();
var path = require('path');
//app.use(logger('dev'))
//app.use(express.static(__dirname + '/view'));
app.use(express.static(__dirname + '/static'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/homepage.html'));
});

app.get('/news', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/news.html'));
});

app.get('/about', function (req, res) {
   res.sendFile(path.join(__dirname + '/view/about.html'));
});

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname + '/view/contact.html'));
});

app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on http://localhost:' + (process.env.PORT || 3000))
})
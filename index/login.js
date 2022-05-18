var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(urlencodedParser);

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/logmail.html');
});

app.post('/process_post', function (req, res) {
    var name = req.body.first_name+ ' ' + req.body.last_name;   //to send back to HTML
    console.log(name);
    res.send(name);
 });

var server = app.listen(8000);
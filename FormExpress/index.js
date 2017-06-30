var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencondedParser = bodyParser.urlencoded({ extended: false});

app.use(express.static('public'));

app.get('/index.html', function(req, res){
    res.sendFile(__dirname + "/" + "index.html");
})

//GET Method
app.get('/processend', function(req, res){
    // Prepare output in JSON format
    respons = {
        name:req.query.name,
        lastname:req.query.lastname
    };
    console.log("This is GET");
    console.log(respons);
    res.end("This is GET" + JSON.stringify(respons));
})

//POST Method
app.post('/processend', urlencondedParser, function(req, res){
    respons = {
        name:req.body.name,
        lastname:req.body.lastname
    };
    console.log("This is POST");
    console.log(respons);
    res.end("This is POST" + JSON.stringify(respons));
})

var server = app.listen(3000, function(){
    var port = server.address().port

    console.log("App listening at http://localhost:",port)
})
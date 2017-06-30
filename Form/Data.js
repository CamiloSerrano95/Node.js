const http = require ('http');
const hostname = '127.0.0.1';
const port = 3000;
const name = "Camilo";
const fs = require('fs');
qs = require('querystring');
const Forms = fs.readFileSync('Forms.html')

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text-plain');
    res.end(Forms);
    // console.log("Hello, tested this " + name);

    if (req.method == 'POST') {
        console.log(req.body);
        const text = '';
        
    } 
    app.get('/Forms.html', function(req, res) {
    res.send('Username: ' + req.query['username']);
    });
});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

/*const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/Forms.html', function(req, res){
    res.sendFile(dirname + "/" + "Forms.html");
})

app.get('Data.js', function(req, res){
    respponse = {
        name:req.query.name
    };

    console.log(respponse);
    res.end(JSON.stringify(respponse));
})

const server = app.listen(3000, function(){
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})*/
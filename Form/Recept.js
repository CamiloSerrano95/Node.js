var http = require('http').createServer(webServer),
    form = require('fs').readFileSync('Forms.html'),
    querystring = require('querystring'),
    util = require('util'),
    datastring = '',
    url = require('url');

function webServer (req, res){
    if (req.method == 'GET') {
        res.writeHead(200, {'Content-type' : 'text-html'})
        res.end(form)
        var url_parts = url.parse(req.url,true)
        var show = url_parts.query

        if(show.name != null){
            console.log(show.name)
            console.log(show.lastname)
            //(return res.end(show.name + " " + show.lastname)
            res.write(show)
        }
        /*var q = url.parse(req.url, true).query;
        var txt = q.name + " " + q.lastname;
        res.end(txt);*/
    }

    if (req.method == 'POST') {
        
        req.on('data', function(data){
            datastring += data
        })
           
        req.on('end', function(data){
            const templatestring = `Your name is: ${datastring}`
            console.log(templatestring)
            res.end(templatestring)
        })
    }
}

http.listen(5000)

console.log('Server listening on http://localhost:5000')
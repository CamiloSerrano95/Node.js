var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  res.send('Your data is: ' + req.query['name'] + req.query['lastname']);
  console.log(name, lastname);
  res.end();
});*/

router.get('', function(req, res, next){
  res.render('index', { title: 'Express' });
  res.send('Your name is: ' + req.query['name'] + req.query['lastname']);
})

module.exports = router;

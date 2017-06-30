var url = require('url');
var address = 'http://localhost:3000/index.html?name=Camilo&lastname=Serrano';
var taken = url.parse(address, true);

console.log(taken.host);
console.log(taken.pathname);
console.log(taken.search);

var datas = taken.query;
console.log(datas.name);
break;
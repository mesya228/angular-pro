var http = require('http');
var url = require('url');

const pizzas = [
  {id: 1, price: 1, name: 'Pizza 1'},
  {id: 2, price: 2, name: 'Pizza 2'},
  {id: 3, price: 3, name: 'Pizza 3'}
];
const drinks = [
  {id: 1, price: 1, name: 'Drink 1'},
  {id: 2, price: 2, name: 'Drink 2'},
  {id: 3, price: 3, name: 'Drink 3'}
];
const sides = [
  {id: 1, price: 1, name: 'Sides 1'},
  {id: 2, price: 2, name: 'Sides 2'},
  {id: 3, price: 3, name: 'Sides 3'}
];
const stores = [
  {id: 1, name: 'London', token: 'eca938c99a0e9ff91029dc'},
  {id: 2, name: 'China', token: 'asd65a16a5sdasd1a6s5rq'},
  {id: 3, name: 'USA', token: 'aas23d1asd98asd4as8d9a'},
];

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

  res.setHeader('Content-Type', 'application/json'); 

  if (req.headers.authorization) { 
    res.end();
    return;
  }

  const path = url.parse(req.url, true).pathname;
  switch(path) {
    case '/pizzas': res.end(JSON.stringify(pizzas)); break;
    case '/drinks': res.end(JSON.stringify(drinks)); break;
    case '/sides': res.end(JSON.stringify(sides)); break;
    case '/store': res.end(JSON.stringify(sides)); break;
    default: res.end(); break;
  }
  
}).listen(8080);
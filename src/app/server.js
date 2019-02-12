var http = require('http');
var url = require('url');

const products = [
  {id: 1, price: 1, name: 'Product 1'},
  {id: 2, price: 2, name: 'Product 2'},
  {id: 3, price: 3, name: 'Product 3'}
];
const cart = [
  {productId: 1, quantity: 10},
  {productId: 2, quantity: 20},
];
const branches = [
  {id: 'A123'},
  {id: 'W228'},
  {id: 'F007'},
  {id: 'Z777'},
];

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Content-Type', 'application/json'); 

  req.url = req.url.split('?')[0];
  switch(req.url) {
    case '/products': res.end(JSON.stringify(products)); break;
    case '/cart': res.end(JSON.stringify(cart)); break;
    case '/branches': res.end(JSON.stringify(branches)); break;
    default: res.end(); break;
  }
  
}).listen(8080);
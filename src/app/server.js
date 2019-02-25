var http = require('http');
var url = require('url');

const messages = [
  {
    id: 1,
    folder: 'Inbox 1',
    from: 'Jane Smith',
    summary: 'Lorem ipsum dolor si amet',
    timestamp: 1487848162905
  },
  {
    id: 2,
    folder: 'Inbox 2',
    from: 'Jane Smith',
    summary: 'Lorem ipsum dolor si amet',
    timestamp: 1487848162905
  },
  {
    id: 3,
    folder: 'Inbox 3',
    from: 'Jane Smith',
    summary: 'Lorem ipsum dolor si amet',
    timestamp: 1487848162905
  }
];

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Content-Type', 'application/json'); 

  const path = url.parse(req.url, true).pathname;
  
  switch(path) {
    case '/messages': res.end(JSON.stringify(products)); break;
    default: res.end(); break;
  }
  
}).listen(8080);
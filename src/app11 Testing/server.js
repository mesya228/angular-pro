var http = require('http');
var url = require('url');

const folders = {
  inbox: [
    {
      id: 1,
      folder: 'Inbox',
      from: 'Tyler Durden',
      summary: "If you aren't on your way to becoming a vet in six weeks, you will be dead.",
      timestamp: 1457818162905
    },
    {
      id: 2,
      folder: 'Inbox',
      from: 'Tyler Durden',
      summary: 'Space monkey!',
      timestamp: 1497818162905
    },
    {
      id: 3,
      folder: 'Inbox',
      from: 'Tyler Durden',
      summary: "What's that smell?",
      timestamp: 1551796321708
    }
  ],
  trash: [
    {
      id: 4,
      folder: 'Trash',
      from: 'Tyler Durden',
      summary: "You're too old, fatty",
      timestamp: 1551796361708
    }
  ]
}

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:9876');
  res.setHeader('Content-Type', 'application/json'); 

  const path = url.parse(req.url, true).pathname;
  const q = url.parse(req.url, true).query;
  
  switch(path) {
    case '/items': res.end(JSON.stringify(folders.inbox)); break;
    case '/products': res.end(JSON.stringify(folders.trash)); break;
    default: res.end(); break;
  }
  
}).listen(8080);
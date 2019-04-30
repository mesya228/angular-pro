var http = require('http');
var url = require('url');

const songs = [
  {
    id: 1,
    artist: 'Artist 1',
    track: 'Track 1',
    listened: true,
    favourites: true
  },
  {
    id: 2,
    artist: 'Artist 2',
    track: 'Track 2',
    listened: true,
    favourites: false
  },
  {
    id: 3,
    artist: 'Artist 3',
    track: 'Track 3',
    listened: false,
    favourites: false
  },
  {
    id: 4,
    artist: 'Artist 4',
    track: 'Track 4',
    listened: true,
    favourites: false
  },
  {
    id: 5,
    artist: 'Artist 5',
    track: 'Track 5',
    listened: false,
    favourites: false
  },
  {
    id: 6,
    artist: 'Artist 6',
    track: 'Track 6',
    listened: false,
    favourites: false
  },
  {
    id: 7,
    artist: 'Artist 7',
    track: 'Track 7',
    listened: true,
    favourites: true
  },
  {
    id: 8,
    artist: 'Artist 8',
    track: 'Track 8',
    listened: true,
    favourites: false
  },
  {
    id: 9,
    artist: 'Artist 9',
    track: 'Track 9',
    listened: true,
    favourites: true
  },
  {
    id: 10,
    artist: 'Artist 10',
    track: 'Track 10',
    listened: false,
    favourites: false
  },
];

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Content-Type', 'application/json'); 

  const path = url.parse(req.url, true).pathname;
  const q = url.parse(req.url, true).query;
  
  switch(path) {
    case '/songs': res.end(JSON.stringify(songs)); break;
    default: res.end(); break;
  }
  
}).listen(8080);
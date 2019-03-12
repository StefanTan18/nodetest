var http = require('http');
var fs = require('fs');

var hostname = '127.0.0.1';
var port = 3000;

// fs.readFile('index.html', (err, html) => {
//   if (err){
//     throw err;
//   }
//   var server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.write(html)
//     res.end();
//   });
//
//   server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });
// });

var server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;
const Person = require('./testpath/person')

const arthur = new Person('Arthur', 32)

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Hello World\n ${arthur.greeting()}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

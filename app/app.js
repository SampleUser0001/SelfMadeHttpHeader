const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;
const HTTP_STATUS = 200;

const server = http.createServer((req, res) => {
//  res.statusCode = HTTP_STATUS;
//  res.setHeader('Content-Type', 'text/plain');
  res.writeHead(HTTP_STATUS, 'Content-Type: hogehoge');
res.end('Hello World');
}).listen(PORT);
// listen(3000)を書かないとホストからアクセスできない

console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
// 下記にしてしまうと起動に失敗する。
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./public/index.html', (error, data) => {
      if (error) throw error;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/about') {
    fs.readFile('./public/about.html', (error, data) => {
      if (error) throw error;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else if (req.url === '/contact-me') {
    fs.readFile('./public/contact-me.html', (error, data) => {
      if (error) throw error;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  } else {
    fs.readFile('./public/404.html', (error, data) => {
      if (error) throw error;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
});

const port = process.env.PORT || 3000;
const hostname = '127.0.0.1';

server.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});

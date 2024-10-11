// import http from "http";

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}/`);
// });
// when using import, include "type": "module " to the package.json file
// while using require, include "type": "commonjs" to replace "type":"module"

const express = require('express')
const app = express()
const port = 3006

app.get('/user', (req, res) => {
  res.send('Hello World!, I am getting')
});

app.post('/user', (req, res) => {
  res.send('Hello World!, I am posting')
});

app.put('/user', (req, res) => {
  res.send('Hello World!, I am putting')
});

app.patch('/user', (req, res) => {
  res.send('Hello World!, I am patching')
});

app.delete('/user', (req, res) => {
  res.send('Hello World!, I am deleting')
});

app.use('*', (req, res) => {
  res.status(404);
  res.send('URL not found')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
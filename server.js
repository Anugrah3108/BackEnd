// // import http from 'http';
// let http = require("http");
// let fs = require("fs");
// console.log("starting server");

// // let { Buffer } = require("buffer");
// // buf = Buffer.from("hello");
// // console.log(buf);

// http
//   .createServer((req, res) => {
//     fs.readFile("response.html", (err, data) => {
//       if (!err) {
//         res.writeHead(200, {
//           "Content-Type": "text/html",
//           "X-Auth-Token": "d0h8nd09snd093ee",
//         });
//         res.write(data);
//         return res.end();
//       }
//       res.write("error while reading the file" + err);
//       return res.end();
//     });
//   })
//   .listen(8080);

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Health-check endpoint (Industry standards)
app.get("/health", (req, res) => {
  res.send("Ok");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

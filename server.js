// import http from 'http';
let http = require("http");
let fs = require("fs");
console.log("starting server");
http
  .createServer((req, res) => {
    fs.readFile("response.html", (err, data) => {
      if (!err) {
        res.writeHead(200, {
          "Content-Type": "text/html",
          "X-Auth-Token": "d0h8nd09snd093ee",
        });
        res.write(data);
        return res.end();
      }
      res.write("error while reading the file" + err);
      return res.end();
    });
  })
  .listen(8080);

const http = require("node:http");
const fs = require("node:fs");

const port = 8080;
const serveFile = (filePath) => {
  return fs.readFileSync(__dirname + filePath, {
    encoding: "utf-8",
  });
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  if (req.url === "/") {
    res.write(serveFile("/index.html"));
    res.end();
  } else if (req.url === "/contact-me.html") {
    res.write(serveFile("/contact-me.html"));
    res.end();
  } else if (req.url === "/about.html") {
    res.write(serveFile("/about.html"));
    res.end();
  } else {
    res.write(serveFile("/404.html"));
    res.end();
  }
  console.log(req.url);
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain");
//   res.end("Hello World\n");
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

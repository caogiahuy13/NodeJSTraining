const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.write("<h1>Hello World</h1>");
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello World</h1>");
  res.end;
});

server.listen(3000);

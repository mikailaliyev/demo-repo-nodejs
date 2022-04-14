const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>Welcome to our homepage</h1>");
  } else if (req.url === "/about") {
    res.end("Here is our short history");
  } else {
    res.end(`
    <h1>Opps!</h1>
    <p>Maybe you want to open this <a href="/">page</a></p>

    `);
  }
});

server.listen(5000);

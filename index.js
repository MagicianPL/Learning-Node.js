const http = require("http");

const server = http.createServer((req, resp) => {
  console.log("Ktoś wszedł na server");
  console.log(req.headers);
  resp.end("Hello Node!");
});

server.listen(3000, () => {
  console.log("Nasłuchuję na porcie 3000");
});

/*const http = require("http");

const server = http.createServer((req, resp) => {
  console.log("Ktoś wszedł na server");
  console.log(req.headers);
  resp.end("Hello Node!");
});

server.listen(3000, () => {
  console.log("Nasłuchuję na porcie 3000");
});*/

const http = require("http");

const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.write("<h1>Strona główna</h1>");
    resp.end();
  } else if (req.url === "/kontakt") {
    resp.write("<h1>Kontakt</h1>");
    resp.end();
  } else {
    resp.write("Nie znaleziono adresu");
    resp.end();
  }
});

server.listen(3000, () => {
  console.log("Słucham na 3000");
});

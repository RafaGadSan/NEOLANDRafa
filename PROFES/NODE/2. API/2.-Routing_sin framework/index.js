//! ---------- primero requerimos el protologo http

const http = require("http");

//! ---------- creamos el servidor web

const requestHandle = (req, res) => {
  console.log("😎", req.url);

  if (req.url === "/saludo") res.end("<h1>Holaaaaaaaaaaaaa</h1>");
  if (req.url === "/despedida") res.end("<h1>No te marches mi amol </h1>");
  if (req.url === "/users" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-type", "application/json");
    res.end(JSON.stringify({ saludo: "hola", despedida: "adios" }));
  }
  res.end("<h1>No te marches mi amol </h1>");
};
const app = http.createServer(requestHandle);

//! ---------- asignamos un puerto al server y lo "escuchamos"
app.listen(8080, () => {
  console.log("Server listening on port 😋 http://localhost:8080");
});

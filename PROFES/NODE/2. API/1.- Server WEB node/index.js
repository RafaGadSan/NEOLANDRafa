//! ---------- primero requerimos el protologo http

const http = require("http");

//! ---------- creamos el servidor web
const app = http.createServer((req, res) => {
  // configuramos la respuesta del servidor

  res.statusCode = 200; //todo  200 es un estado ok
  res.setHeader("Content-Type", "text/plain");
  res.end("tengo hambre");
});

//! ---------- asignamos un puerto al server y lo "escuchamos"
app.listen(8080, () => {
  console.log("Server listening on port 😋 http://localhost:8080");
});

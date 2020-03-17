const express = require("express");

let app = express();

app.get("/", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Você está na pasta raiz</h1>");
});

app.get("/users", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.json({
    users: [
      {
        name: "Roberto",
        email: "roberto@teste.com",
        id: 1
      }
    ]
  });
});

app.listen(3000, "localhost", () => {
  console.log("servidor rodando");
});

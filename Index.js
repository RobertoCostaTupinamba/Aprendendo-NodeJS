const express = require("express");
const consing = require("consign");

let app = express();

consing()
  .include("routes")
  .into(app);

app.listen(3000, "localhost", () => {
  console.log("servidor rodando");
});

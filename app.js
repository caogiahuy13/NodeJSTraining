const express = require("express");

const app = express();

app.use("/add-product", (req, res, next) => {
  console.log("Another middleware");
  res.send("<h1>Another Middleware</h1>");
});

app.use((req, res, next) => {
  console.log("Another middleware");
  res.send("<h1>Hello World</h1>");
});

app.listen(3000);

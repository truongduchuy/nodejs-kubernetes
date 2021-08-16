const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello Nodejs Kubernetes");
});

app.get("/audrey", (req, res) => {
  res.send("Audrey app");
});

app.listen(PORT);
console.log(`server is running on port ${PORT}`);
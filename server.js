const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("hello Root");
});

app.get("/app1", (req, res) => {
  res.send("hello App1");
});

app.get("/app1/audrey", (req, res) => {
  res.send("hello Audrey");
});

app.get("/path1/kube", (req, res) => {
  res.send("App1 kubernetes");
});

app.listen(PORT);
console.log(`server is running on port ${PORT}`);
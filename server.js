const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello App1");
});

// app.get("/about", (req, res) => {
//   res.send("app1 Audrey app");
// });

// app.get("/app1/audrey", (req, res) => {
//   res.send("app1 Audrey app");
// });

// app.get("/path1/kube", (req, res) => {
//   res.send("App1 kubernetes");
// });

app.listen(PORT);
console.log(`server is running on port ${PORT}`);
const express = require("express");

// Constants
const PORT = 8080;

// App
const app = express();
app.get("/", (req, res) => {
  res.send("Hello World 123");
});

app.listen(PORT);
console.log(`server is running on port ${PORT}`);
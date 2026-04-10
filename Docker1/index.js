const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Docker - Srikanth 🚀");
});

app.listen(7000, () => {
  console.log("Server running on port 7000");
});

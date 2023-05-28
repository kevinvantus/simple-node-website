const express = require("express");

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("index.html");
});

app.get("/about", (req, res) => {
  res.send("about.html");
});

app.get("/contact", (req, res) => {
  res.send("contact-me.html");
});

app.use((req, res) => {
  res.status(404).send("404.html");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

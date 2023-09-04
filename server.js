const path = require("path");
const express = require("express");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

const hostname = "127.0.0.1";
const port = 3031;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

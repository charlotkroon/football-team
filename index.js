const express = require("express");
const app = express();
const db = require("./db");

//middleware
const bodyParser = require("body-parser");

//Routers
const teamRouter = require("./team/router");

//Init

const port = 4000;

//app.use
app.use(express.json());
app.use("/team", teamRouter);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Listening on :${port}`));

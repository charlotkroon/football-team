const express = require("express");
const db = require("./db");

//middlewares
const bodyParser = require("body-parser");

//Routers
const teamRouter = require("./team/router");

//Init
const app = express();
const port = 4000;

//app.use
app.use(bodyParser.json());
app.use(teamRouter);

app.listen(port, () => console.log(`Listening on :${port}`));

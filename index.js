const express = require("express");
const app = express();
const db = require("./db");

//middleware
const bodyParser = require("body-parser");

//Routers
const teamRouter = require("./team/router");

//Init
const port = 4000;

//Model
const Player = require("./player/model");

//app.use
app.use(express.json());
app.use(teamRouter);

app.listen(port, () => console.log(`Listening on :${port}`));

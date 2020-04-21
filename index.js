const express = require("express");
const app = express();
const db = require("./db");

//middleware
const bodyParser = require("body-parser");

//Routers
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");
//Init
const port = 4000;

//app.use
app.use(express.json());
app.use(teamRouter);

app.listen(port, () => console.log(`Listening on :${port}`));

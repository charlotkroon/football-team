const express = require("express");
const app = express();
const db = require("./db");

//middleware
const bodyParser = require("body-parser");
const cors = require("cors");
const bodyParserMiddleWare = bodyParser.json();
const corsMiddleware = cors();

//Routers
const teamRouter = require("./team/router");

const Team = require("./team/model");

//Init
const port = 4000;

//app.use
app.use(express.json());
app.use(teamRouter);

app.listen(port, () => console.log(`Listening on :${port}`));

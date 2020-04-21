const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

//Routers
const teamRouter = require("./team/router");
const playerRouter = require("./player/router");

const app = express();
const port = 4000;

//Middlwares
const corseMiddleware = cors();
const parserMiddleware = bodyParser.json();
app.use(corseMiddleware, parserMiddleware);

//app.use
app.use(playerRouter);
app.use(teamRouter);

app.listen(port, () => console.log(`Listening on :${port}`));

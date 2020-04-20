const express = require("express");

//middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
const bodyParserMiddleware = bodyware.json;
const corsMiddleware = cors();

//Routers
const teamRouter = require("./team/router");

//DB
const db = require("./db");

//Init
const app = express();
const port = 4000;

//app.use
app.use(teamRouter);

app.listen(port, () => console.log(`Listening on :${port}`));

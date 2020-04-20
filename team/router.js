const { Router } = require("express");
const Team = require("./model");

const router = new Router();

//GET endpoint
router.get("/team", (req, res, next) => {
  Team.findAll;
});

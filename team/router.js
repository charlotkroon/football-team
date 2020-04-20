const { Router } = require("express");
const Team = require("./model");

const router = new Router();

//GET endpoint
router.get("/", (req, res, next) => {
  Team.findAll()
    .then((team) => {
      res.send(team);
    })
    .catch(next);
});

module.exports = router;

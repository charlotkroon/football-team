const { Router } = require("express");
const Team = require("./model");

const router = new Router();

//call the Team.findAll method inside the router method
router.get("/team", async (req, res, next) => {
  Team.findAll()
    .then((team) => {
      res.send(team);
    })
    .catch(next);
});

// Create a new team account
router.post("/team", async (req, res, next) => {
  Team.create(req.body)
    .then((team) => res.json(team))
    .catch(next);
});

//route parameter (id)
router.get("/team/:id", (req, res, next) => {
  console.log("req.params.id is:");
  Team.findByPk().then(
    ((team) => {
      res.send(team);
    }).catch(next)
  );
});

module.exports = router;

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

router.post("/", (req, res, next) => {
  Team.create()
    .then((team) => {
      res.send(team);
    })
    .catch(next);
});

//route parameter (id)
router.get("/team/:id", (req, res, next) => {
  Team.findByPk().then(
    ((team) => {
      res.send(team);
    }).catch(next)
  );
});

module.exports = router;

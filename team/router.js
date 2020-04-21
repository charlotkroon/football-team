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
  console.log("WHAT IS REQ.BODY", req.body);
  Team.create(req.body) //without req.body the value will be null
    .then((team) => res.json(team))
    .catch(next);
});

//delete team
router.delete("/team", async (req, res, next) => {
  Team.destroy({
    where: {
      id: req.params.teamId,
    },
  })
    .then((numDeleted) => {
      if (numDeleted) {
        res.status(204).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(next);
});

//route parameter (id)
router.get("/team/:id", (req, res, next) => {
  console.log("req.params.id is:");
  Team.findByPk(req.body).then(
    ((team) => {
      res.send(team);
    }).catch(next)
  );
});

module.exports = router;

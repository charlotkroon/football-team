const { Router } = require("express");
const Player = require("./model");

const router = new Router();

router.get("/player", (req, res, next) => {
  Player.findAll()
    .then((player) => {
      res.send(player);
    })
    .catch(next);
});

//Create a new player
router.post("/player", async (req, res, next) => {
  Player.create(req.body)
    .then((player) => res.json(player))
    .catch(next);
});

router.delete("/player", async (req, res, next) => {
  Player.destroy({
    where: {
      id: req.params.playerId,
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

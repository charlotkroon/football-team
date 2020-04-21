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

//route parameter id
router.get("/player/:id", async (req, res, next) => {
  console.log("the player req.params.id is:");
  Player.findByPk(req.body)
    .then((player) => {
      res.send(player);
    })
    .catch(next);
});

module.exports = router; //without this, the following error will occur: throw new TypeError('app.use() requires a middleware function')

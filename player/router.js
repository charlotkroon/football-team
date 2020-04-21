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

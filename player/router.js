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

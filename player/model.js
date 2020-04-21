const Sequelize = require("sequelize");
const db = require("../db");
const Team = require("../team/model");

const Player = db.define("player", {
  name: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  number: Sequelize.INTEGER,
});

Player.belongsTo(Team);

module.exports = Player;

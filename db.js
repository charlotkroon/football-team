const Sequelize = require("sequelize");

const databaseUrl = "postgres://postgres:constrasena@localhost:5432/postgres";
const db = new Sequelize(databaseUrl);

db.sync({ force: false })
  .then(() => console.log("Database schema updated"))
  .catch(console.error);

module.exports = db;

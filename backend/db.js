const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:1234@localhost:3306/gamesdb");

module.exports = sequelize;
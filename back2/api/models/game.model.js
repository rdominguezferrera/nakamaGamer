const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Game = connection.define("game", {
  
  game_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  game_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  game_controll_age: {
    type: DataTypes.ENUM(['under 13','between 13 and 15','over 18']),
    allowNull: false,
  },
});

module.exports = Game;

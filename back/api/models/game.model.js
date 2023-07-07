const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Game = sequelize.define("game", {
  
  game_title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  game_multiplayer: {
    type: DataTypes.ENUM,
    allowNull: false,
  },

  game_description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  game_controll_age: {
    type: DataTypes.ENUM,
    allowNull: false,
  },
});

module.exports = Game
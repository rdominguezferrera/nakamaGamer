const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define("user", {
  user_firstname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_lastname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_nickname: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_DNI: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  user_discord_user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = User
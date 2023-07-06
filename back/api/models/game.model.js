const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Game = sequelize.define(
    'game',
    {
        game_title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        game_multiplayer:{
            type: DataTypes.ENUM,
            allowNull: false,
            
        },

       game_multiplayer: {
            type: DataTypes.TEXT,
            allowNull: false
        }

     
        
    }
        
    

)

module.exports = Game
const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Score_game = sequelize.define(
    'score_game',
    {
        score_game_description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        game_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }

      
        
    }
        
    

)

module.exports = Score_game
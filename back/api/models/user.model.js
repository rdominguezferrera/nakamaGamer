const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const User = sequelize.define(
    'user',
    {
        player_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        player_DNI: {
            type: DataTypes.STRING,
            allowNull: false,
            
        },

        player_email: {
            type: DataTypes.STRING,
            allowNull: false
        },

        player_password: {
            type: DataTypes.STRING,
            allowNull: false
        },

        player_discord_user: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
        
        
    }
        
    

)

module.exports = User
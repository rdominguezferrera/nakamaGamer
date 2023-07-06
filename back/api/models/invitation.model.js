const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Invitation = sequelize.define(
    'invitation',
    {
        invitation_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
       
        
    }
        
    

)

module.exports = Invitation
const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Invitation = sequelize.define(
    'invitation',
    {
        invitation_state: {
            type: DataTypes.ENUM,
            allowNull: false
        },
       
        
    }
        
    

)

module.exports = Invitation
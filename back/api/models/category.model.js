const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Category = sequelize.define(
    'category',
    {
        category_type: {
            type: DataTypes.ENUM,
            allowNull: false
        },

        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
     
     

        
        
    }
        
    

)

module.exports = Category
const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Category = sequelize.define(
    'category',
    {
        category_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        category_controll_age: {
            type: DataTypes.ENUM,
            allowNull: false,
            
        }


        
        
    }
        
    

)

module.exports = Category
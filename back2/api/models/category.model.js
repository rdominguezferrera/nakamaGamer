const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Category = connection.define("category", {
  category_type: {
    type: DataTypes.ENUM(['RPG','shooter','roll','adventure','fantasy','strategy','all']),
    allowNull: false,
  }

});

module.exports = Category;

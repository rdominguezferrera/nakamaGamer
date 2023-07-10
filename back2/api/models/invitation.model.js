const { DataTypes } = require("sequelize");
const { connection } = require("../../database");

const Invitation = connection.define("invitation", {
  invitation_state: {
    type: DataTypes.ENUM(['pending','accepted','rejected']),
    allowNull: false,
  },
});

module.exports = Invitation;
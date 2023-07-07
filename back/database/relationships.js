const Game = require('../api/models/game.models')
const User = require('../api/models/user.models')
const Category = require('../api/models/category.models')
const Invitation = require('../api/models/invitation.models')

function addRelationsToModels() {

    try {

    
        //// Many to Many

        // "user"."user_id" <> "user_game"."user_id"

        User.belongsToMany(Game, { through: "user_game" });
        Game.belongsToMany(User, { through: "user_game" });

        // "game"."game_id" <> "game_category"."game_id"

        Game.belongsToMany(Category, { through: 'game_category' })
        Category.belongsToMany(Game, { through: 'game_category' })

        // "user"."user_id" <> "user_invitation"."user_id"

        User.belongsToMany(Invitation, { through: "user_invitation" });
        Invitation.belongsToMany(User, { through: "user_invitation" });

        console.log('Relations added to all models')

    } catch (error) {

        throw new Error(error)
    }
}

module.exports = { addRelationsToModels }
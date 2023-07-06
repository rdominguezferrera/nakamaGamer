const Game = require('../api/models/game.models')
const Player = require('../api/models/player.models')
const Category = require('../api/models/category.models')
const Invitation = require('../api/models/invitation.models')

function addRelationsToModels() {

    try {

    
        //// Many to Many

        // "player"."player_id" <> "player_game"."player_id"

        Player.belongsToMany(Game, { through: 'player_game' })
        Game.belongsToMany(Player, { through: 'player_game' })

        // "game"."game_id" <> "game_category"."game_id"

        Game.belongsToMany(Category, { through: 'game_category' })
        Category.belongsToMany(Game, { through: 'game_category' })

        // "player"."player_id" <> "player_invitation"."player_id"

        Player.belongsToMany(Invitation, { through: 'player_invitation' })
        Invitation.belongsToMany(Player, { through: 'player_invitation' })

        console.log('Relations added to all models')

    } catch (error) {

        throw new Error(error)
    }
}

module.exports = addRelationsToModels
const User = require("../models/user.model");
const Game = require("../models/game.model");
const Category = require("../models/category.model");
const Invitation = require("../models/invitation.model");

const { Op } = require("sequelize");

async function getAllGames(req, res) {
  try {
    if (!Object.values(req.query).length) {
      const games = await Game.findAll({ paranoid: false });
      if (game) {
        return res.status(200).json(users);
      } else {
        return res.status(404).send("No games found");
      }
    } else {
      const game = await Game.findAll({
        where: {
          [Op.and]: [req.query],
        },
      });
      if (game.length !== 0) {
        return res.status(200).json(game);
      } else {
        return res.status(404).send("No matches found");
      }
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneGame(req, res) {
  try {
    const game = await Game.findByPk(req.params.id);
    if (game) {
      return res.status(200).json(game);
    } else {
      return res.status(404).send("game not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}


async function addNewGame(req, res) {
  try {
    const game = await Game.create({
      title: req.body.game_title,
    });
    return res.status(200).json({ message: "game created", game: game });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteGame(req, res) {
  try {
    const game = await Game.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (game) {
      return res.status(200).json("game deleted");
    } else {
      return res.status(404).send("game not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}





module.exports = {
  getAllGames,
  getOneGame,
  addNewGame,
  deleteGame,
  /*updateUser,
  getAllUsersEager,*/
};

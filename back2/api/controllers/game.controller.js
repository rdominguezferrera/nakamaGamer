const Category = require("../models/category.model");
const Game = require("../models/game.model");
const User = require("../models/user.model");

const getAllGames = async (req, res) => {
  try {
    const games = await Game.findAll();

    if (games) {
      res.status(200).json(games);
    } else {
      res.status(404).send("games not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


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
    const game = await Game.create(req.body)
    const category = await Category.findByPk(req.body.categoryId)
    await game.addCategory(category)
    return res.status(200).json({ message: "game created", game: game });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateGame(req, res) {
  try {
    const [gameExist, game] = await Game.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    console.log(req.params.id)
    if (gameExist !== 0) {
      return res.status(200).json({ message: "game updated", game: game });
    } else {
      return res.status(404).send("game not found");
    }
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
const getGameUsers = async (req,res) => {
  try {
     const game = await Game.findOne({
      where: {
        game_title: req.params.game
      },
      include: User
    })
     return res.status(200).json(game)
  } catch (error) {
     return res.status(500).send(error.message);
    
  }
}


module.exports = {
  getAllGames,
  getOneGame,
  addNewGame,
  updateGame,
  deleteGame,
  getGameUsers
};

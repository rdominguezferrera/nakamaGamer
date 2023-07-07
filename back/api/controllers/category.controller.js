const User = require("../models/user.model");
const Game = require("../models/game.model");
const Category = require("../models/category.model");
const Invitation = require("../models/invitation.model");

const { Op } = require("sequelize");

async function getAllCategories(req, res) {
  try {
    if (!Object.values(req.query).length) {
      const categories = await Category.findAll({ paranoid: false });
      if (category) {
        return res.status(200).json(categories);
      } else {
        return res.status(404).send("No games found");
      }
    } else {
      const category = await Category.findAll({
        where: {
          [Op.and]: [req.query],
        },
      });
      if (category.length !== 0) {
        return res.status(200).json(category);
      } else {
        return res.status(404).send("No matches found");
      }
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function getOneCategory(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      return res.status(200).json(category);
    } else {
      return res.status(404).send("game not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function addNewCategory(req, res) {
  try {
    const category = await Category.create({
      category: req.body.category_name
    });
    return res
      .status(200)
      .json({ message: "game created", category: category });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function deleteCategory(req, res) {
  try {
    const category = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (category) {
      return res.status(200).json("category deleted");
    } else {
      return res.status(404).send("category not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getAllCategories,
  getOneCategory,
  addNewCategory,
  deleteCategory,
  /*updateUser,
  getAllUsersEager,*/
};

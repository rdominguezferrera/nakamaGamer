const Category = require("../models/category.model");
const Game = require("../models/game.model");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();

    if (categories) {
      res.status(200).json(categories);
    } else {
      res.status(404).send("categories not found");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};


async function getOneCategory(req, res) {
  try {
    const category = await Category.findByPk(req.params.id);
    if (category) {
      return res.status(200).json(category);
    } else {
      return res.status(404).send("category not found");
    }
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function addNewCategory(req, res) {
  try {
    const category = await Category.create(req.body);
    return res
      .status(200)
      .json({ message: "category created", category: category });
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function updateCategory(req, res) {
  try {
    const [categoryExist, category] = await Category.update(req.body, {
      returning: true,
      where: {
        id: req.params.id,
      },
    });
    console.log(req.params.id);
    if (categoryExist !== 0) {
      return res
        .status(200)
        .json({ message: "category updated", category: category });
    } else {
      return res.status(404).send("category not found");
    }
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
const getCategoryGames = async (req,res) => {

  try {
    const category = await Category.findOne({
      where: {
        category_type: req.params.category
      },
      include: Game
    })
    return res.status(200).json(category)
  } catch (error) {
    return res.status(500).send(error.message);
    
  }
}

module.exports = {
  getAllCategories,
  getOneCategory,
  addNewCategory,
  updateCategory,
  deleteCategory,
  getCategoryGames,
};

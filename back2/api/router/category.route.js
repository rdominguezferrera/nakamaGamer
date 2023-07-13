const router = require("express").Router();
const { getAllCategories, getCategoryGames } = require("../controllers/category.controller");
const { getOneCategory } = require("../controllers/category.controller");
const { addNewCategory } = require("../controllers/category.controller");
const { updateCategory } = require("../controllers/category.controller");
const { deleteCategory } = require("../controllers/category.controller");

router.get("/:category", getCategoryGames)
router.get("/", getAllCategories);
router.get("/", getOneCategory);
router.post("/", addNewCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;

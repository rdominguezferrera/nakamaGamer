const router = require("express").Router();
const { getAllGames } = require("../controllers/game.controller");
const { getOneGame } = require("../controllers/game.controller");
const { addNewGame } = require("../controllers/game.controller");
const { updateGame } = require("../controllers/game.controller");
const { deleteGame } = require("../controllers/game.controller");

router.get("/", getAllGames);
router.get("/:id", getOneGame);
router.post("/", addNewGame);
router.put("/:id", updateGame);
router.delete("/:id", deleteGame);

module.exports = router;

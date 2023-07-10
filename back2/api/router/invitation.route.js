const router = require("express").Router();
const { getAllInvitations } = require("../controllers/invitation.controller");
const { getOneInvitation } = require("../controllers/invitation.controller");
const { addNewInvitation } = require("../controllers/invitation.controller");
const { updateInvitation } = require("../controllers/invitation.controller");
const { deleteInvitation } = require("../controllers/invitation.controller");


router.get("/", getAllInvitations);
router.get("/", getOneInvitation);
router.post("/", addNewInvitation);
router.put("/:id", updateInvitation);
router.delete("/:id", deleteInvitation);



module.exports = router;

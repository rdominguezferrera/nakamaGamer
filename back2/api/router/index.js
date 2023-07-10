const router = require('express').Router()

// GET ALL

router.use('/users',require('./user.route'))
router.use('/games',require('./game.route'))
router.use('/categories',require('./category.route'))
router.use('/invitations',require('./invitation.route'))
router.use("/auth", require("./auth.router"));



module.exports = router
const {
    getAllGames,
    getOneGame,
    createNewGame,
    deleteGame
    
 
   
} = require('../controllers/puntoextraccion.controller') 
const gameRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { checkAdmin } = require('../../middlewares/roleCheck')
const { checkPlayer } = require('../../middlewares/roleCheck')



gameRouter.get('/',checkAuth, checkPlayer, getAllGames)
gameRouter.get('/:id',checkAuth,checkPlayer, getOneGame)
gameRouter.post('/', checkAuth, checkAdmin,  createNewGame)
gameRouter.delete('/', checkAuth, checkAdmin,  deleteGame)



module.exports = {gameRouter} 
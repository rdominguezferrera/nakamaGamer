const {
    getAllCategories,
    getOneCategory,
    createNewCategory,
    createNewGame,
    deletePlayer,
    getAllUserEager
} = require('../controllers/puntoextraccion.controller') 
const puntoextraccionRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { checkAdmin } = require('../../middlewares/roleCheck')
const { checkPlayer } = require('../../middlewares/roleCheck')



categoryRouter.get('/',checkAuth, checkPlayer, getAllCategories)
puntoextraccionRouter.get('/:id',checkAuth,checkPlayer, getOneCategory)
puntoextraccionRouter.post('/', checkAuth, checkAdmin,  createNewCategory)
puntoextraccionRouter.put('/:id', checkAuth, checkAdmin,  createNewGame)
puntoextraccionRouter.delete('/:id', checkAuth, checkAdmin, deletePlayer)
puntoextraccionRouter.get('/:puntoextraccionId/eager', checkAuth, checkPlayer,getAllUserEager)

module.exports = {puntoextraccionRouter} 
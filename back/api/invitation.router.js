const {
    getAllInvitations,
    getOneInvitation,
    createNewInvitation,
    deleteInvitation
    
 
   
} = require('../controllers/puntoextraccion.controller') 
const invitationRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { checkAdmin } = require('../../middlewares/roleCheck')
const { checkPlayer } = require('../../middlewares/roleCheck')



gameRouter.get('/',checkAuth, checkPlayer, getAllInvitations)
gameRouter.get('/:id',checkAuth,checkPlayer, getOneInvitation)
gameRouter.post('/', checkAuth, checkAdmin,  createNewInvitation)
gameRouter.delete('/', checkAuth, checkAdmin,  deleteInvitation)



module.exports = { invitationRouter } 
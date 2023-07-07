const {
    getAllUsers,
    getOneUser,
    addNewUser,
    deleteUser,
    updateUser,
    //addUserNewCategory,
    //deleteUserNewCategory,
    //addUserNewGame,
    getAllUsersEager

} = require('../controllers/puntoextraccion.controller') 
const userRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { checkAdmin } = require('../../middlewares/roleCheck')
const { checkPlayer } = require('../../middlewares/roleCheck')



userRouter.get("/", checkAuth, checkPlayer, getAllUsers);
userRouter.get("/", checkAuth, checkPlayer, getOneUser);
userRouter.get("/", checkAuth, checkAdmin, addNewUser);
userRouter.delete('/',checkAuth, checkAdmin, deleteUser)
userRouter.get('/',checkAuth, checkAdmin,  updateUser)
userRouter.post('/', checkAuth, checkAdmin,  addUserNewCategory)
userRouter.delete('/', checkAuth, checkAdmin,  deleteUserNewCategory)
userRouter.put('/:id', checkAuth, checkAdmin,  addUserNewGame)
userRouter.get('/:allUserId/eager', checkAuth, checkPlayer,getAllUsersEager)


module.exports = {userRouter} 
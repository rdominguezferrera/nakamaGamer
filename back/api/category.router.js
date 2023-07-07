const {
    getAllCategories,
    getOneCategory,
    addNewCategory,
    deleteCategory
    
 
   
} = require('../controllers/puntoextraccion.controller') 
const categoryRouter = require('express').Router()
const { checkAuth } = require('../../middlewares/auth')
const { checkAdmin } = require('../../middlewares/roleCheck')
const { checkPlayer } = require('../../middlewares/roleCheck')



gameRouter.get('/',checkAuth, checkPlayer, getAllCategories)
gameRouter.get('/:id',checkAuth,checkPlayer, getOneCategory)
gameRouter.post("/", checkAuth, checkAdmin, addNewCategory);
gameRouter.delete('/', checkAuth, checkAdmin,  deleteCategory)



module.exports = {categoryRouter} 
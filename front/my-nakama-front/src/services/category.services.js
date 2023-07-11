import api from './config'

const getAllCategories = async () => {

    try {
        const categories = await api.get('/categories')
        return categories.data

        
    } catch (error) {

        return error.response.data
        
    }

}



export { getAllCategories }
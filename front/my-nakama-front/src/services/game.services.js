 import api from './config'

const getAllGames = async () => {
  try {
    const games = await api.get('/games')
    return games.data
  } catch (error) {
    return error.response.data
  }
}

const getGamesByCategoryType = async (category) => {
  try {
    const games = await api.get(`/categories/${category}`)
    return games.data
  } catch (error) {
    return error.response.data
  }
}


const getUsersByGame = async (game) => {
  try {
    const users = await api.get(`/games/${game}`)
    return users.data
    
  } catch (error) {
    return error.response.data
    
  }
}
export { getAllGames, getGamesByCategoryType, getUsersByGame }
  
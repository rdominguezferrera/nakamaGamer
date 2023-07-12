 import api from './config'

const getAllGames = async () => {
  try {
    const games = await api.get('/games')
    return games.data
  } catch (error) {
    return error.response.data
  }
}

export { getAllGames }
  
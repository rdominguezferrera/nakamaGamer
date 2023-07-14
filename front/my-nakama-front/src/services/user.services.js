import api from './config'

const getAllUsers = async () => {
  try {
    const users = await api.get('/users')
    return users.data
  } catch (error) {
    return error.response.data
  }
}


const getProfile = async (id) => {
  try {
    const users = await api.get(`/users/${id}`)
    return users.data
  } catch (error) {
    return error.response.data
  }
}
export { getAllUsers, getProfile }

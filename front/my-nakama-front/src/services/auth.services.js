import api from "./config";

const login = async (body) => {
    //console.log(body)
    try {
      const { data } = await api.post('/auth/login', body)
      localStorage.setItem('token', data.token)
      return 200
    } catch (error) {
      return error.response.data
    }     
}

const signup = async (body) => {
  //console.log(body)
  try {
    const { data } = await api.post('/auth/signup', body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}


export { login, signup }
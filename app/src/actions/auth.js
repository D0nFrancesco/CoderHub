import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
}

const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)
  
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data))
    }
  
    return response.data
}
  
// Logout user
const logout = () => {
    localStorage.removeItem('user')
}

const Auth = {
    register,
    login,
    logout
}
  
export default Auth
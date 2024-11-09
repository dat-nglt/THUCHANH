import axios from 'axios'

const loginSerivce = async (username, password) => {
  try {
    let response = await axios.post(
      'http://localhost:8080/api/v1/login',
      {
        username,
        password
      },
      { withCredentials: true }
    )
    return response
  } catch (error) {
    console.log(error)
  }
}

const userService = { loginSerivce }

export default userService

import axios from 'axios'

const getAllGroup = async () => {
  try {
    let response = await axios.get('http://localhost:8080/api/v1/get-all-group')
    return response.data
  } catch (error) {
    return error
  }
}

const groupService = { getAllGroup }

export default groupService

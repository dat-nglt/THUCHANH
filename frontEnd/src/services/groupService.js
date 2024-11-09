import apiMiddleware from '../apiMiddleware'

const getAllGroup = async () => {
  try {
    let response = await apiMiddleware.get('/get-all-group')
    return response.data
  } catch (error) {
    return error
  }
}

const groupService = { getAllGroup }

export default groupService

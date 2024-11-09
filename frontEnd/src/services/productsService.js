import axios from 'axios'

const getAllProducts = async () => {
  try {
    let response = await axios.get(
      'http://localhost:8080/api/v1/get-all-products'
    )
    return response.data
  } catch (error) {
    return error
  }
}

const getDetailsProduct = async (params) => {
  try {
    let response = await axios.get(
      `http://localhost:8080/api/v1/get-details-products/${params.id}`
    )
    console.log(response.data)

    return response.data
  } catch (error) {
    return error
  }
}

const productsService = { getAllProducts, getDetailsProduct }

export default productsService

import apiMiddleware from '../apiMiddleware' // Import apiMiddleware đã cấu hình từ trước

const getAllProducts = async () => {
  try {
    const response = await apiMiddleware.get('/get-all-products') // Sử dụng apiMiddleware thay vì axios trực tiếp
    return response.data
  } catch (error) {
    return error.response || error // Trả về lỗi nếu có
  }
}

const getDetailsProduct = async (params) => {
  try {
    const response = await apiMiddleware.get(
      `/get-details-products/${params.id}`
    ) // Dùng apiMiddleware thay vì axios trực tiếp
    return response.data
  } catch (error) {
    return error.response || error // Trả về lỗi nếu có
  }
}

const productsService = { getAllProducts, getDetailsProduct }

export default productsService

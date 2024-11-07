import connection from '../configs/connectDB'

const getAllProducts = async () => {
  const [rows, fields] = await connection.execute(
    'SELECT sanpham.masp, sanpham.ten, sanpham.gia, nhom.ten AS tennhom FROM nhom, sanpham WHERE nhom.idnhom = sanpham.idnhom'
  )
  return rows
}

const getDetailsProduct = async (productID) => {
  const [product, fields] = await connection.execute(
    'SELECT sanpham.masp, sanpham.ten, sanpham.hinhanh, sanpham.gia, sanpham.mota, nhom.ten AS tennhom FROM nhom, sanpham WHERE nhom.idnhom = sanpham.idnhom AND sanpham.masp = ?',
    [productID]
  )
  return product
}

export default { getAllProducts, getDetailsProduct }

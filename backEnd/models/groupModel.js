import connection from '../configs/connectDB'

const getAllGroup = async () => {
  const [rows, fields] = await connection.execute('SELECT * FROM nhom')
  return rows
}

export default {
  getAllGroup
}

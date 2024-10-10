import connection from '../configs/connectDB'

const getAllUsers = async () => {
  const [rows, fields] =
    await connection.execute(
      'SELECT * FROM user'
    )
  return rows
}

const addUser = async (
  username,
  fullname,
  address
) => {
  const [result] =
    await connection.execute(
      'INSERT INTO user (username, fullname, address) VALUES (?, ?, ?)',
      [username, fullname, address]
    )
  return result.insertId // Trả về ID của người dùng mới được thêm
}

const updateUser = async (
  id,
  username,
  fullname,
  address
) => {
  const [result] =
    await connection.execute(
      'UPDATE user SET username = ?, fullname = ?, address = ? WHERE id = ?',
      [username, fullname, address, id]
    )
  return result.affectedRows // Trả về số hàng đã bị ảnh hưởng
}

const deleteUser = async (id) => {
  const [result] =
    await connection.execute(
      'DELETE FROM user WHERE id = ?',
      [id]
    )
  return result.affectedRows // Trả về số hàng đã bị ảnh hưởng
}

export default {
  getAllUsers,
  addUser,
  deleteUser,
  updateUser
}

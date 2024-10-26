import express from 'express'
import userModel from '../models/userModel'
import bcrypt from 'bcryptjs'
import session from 'express-session'

const login = (req, res) => {
  try {
    const { username, password } = req.body
    return res.status(200).json({
      message: 'Đăng nhập thành công',
      data: req.body
    })
  } catch (error) {}
}

const getAllUsers = async (req, res) => {
  try {
    let userData = await userModel.getAllUsers()
    return res.status(200).json({
      message: 'Lấy dữ liệu thành công',
      data: userData
    })
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Lấy dữ liệu người dùng không thành công' })
  }
}

const addUser = async (req, res) => {
  const { username, password, fullname, address, email } = req.body

  let salt = bcrypt.genSaltSync(10)
  let hashedPassword = bcrypt.hashSync(password, salt)

  try {
    const newUserId = await userModel.addUser(
      username,
      hashedPassword,
      fullname,
      address,
      email
    )

    return res.status(201).json({
      message: 'Thêm người dùng thành công',
      userId: newUserId
    })
  } catch (error) {
    console.error('Error adding user:', error)
    return res.status(500).json({ message: 'Thêm người dùng thất bại' })
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    const deletedRows = await userModel.deleteUser(id)

    if (deletedRows.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' })
    }
    return res.status(200).json({
      message: 'User deleted successfully',
      userId: id
    })
  } catch (error) {
    console.error('Error deleting user:', error)
    return res.status(500).json({ message: 'Error deleting user' })
  }
}

const updateUser = async (req, res) => {
  const { usernameUpdate, fullnameUpdate, addressUpdate, emailUpdate } =
    req.body
  const idUpdate = req.params.id

  try {
    const updatedRows = await userModel.updateUser(
      idUpdate,
      usernameUpdate,
      fullnameUpdate,
      addressUpdate,
      emailUpdate
    )

    // Check if any rows were updated
    if (updatedRows.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' })
    }

    // Respond with a success message
    return res.status(200).json({
      message: 'User updated successfully',
      userId: idUpdate
    })
  } catch (error) {
    console.error('Error updating user:', error)
    return res.status(500).json({ message: 'Error updating user' })
  }
}

export default { login, addUser, deleteUser, updateUser, getAllUsers }

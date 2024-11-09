import express from 'express'
import userModel from '../models/userModel'
import bcrypt from 'bcryptjs'
import groupModel from '../models/groupModel'
import productModel from '../models/productModel'
import jwt from 'jsonwebtoken'

const login = (req, res) => {
  const SECRET_KEY = process.env.JWT_SECRET || 'defaultSecretKey'
  const { username, password } = req.body
  if (username === 'admin' && password === 'admin') {
    const accessToken = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' })
    res.cookie('token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 1000
    })
    res
      .status(200)
      .json({ message: 'Đăng nhập thành công', accessToken: accessToken })
  } else {
    return res
      .status(401)
      .json({ message: 'Thông tin đăng nhập không chính xác' })
  }
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

const getAllGroup = async (req, res) => {
  try {
    let groupData = await groupModel.getAllGroup()
    return res.status(200).json({
      message: 'Lấy dữ liệu thành công',
      data: groupData
    })
  } catch (error) {
    return res
      .status(500)
      .json({ message: 'Lấy dữ liệu nhóm không thành công' })
  }
}

const getAllProducts = async (req, res) => {
  try {
    let productsData = await productModel.getAllProducts()
    return res.status(200).json({
      message: 'Lấy dữ liệu sản phẩm thành công',
      data: productsData
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Lấy dữ liệu sản phẩm không thành công'
    })
  }
}

const getDetailsProduct = async (req, res) => {
  try {
    const productID = req.params.id
    let detailsProductData = await productModel.getDetailsProduct(productID)
    return res.status(200).json({
      message: 'Lấy dữ liệu sản phẩm thành công',
      data: detailsProductData
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Lấy dữ liệu sản phẩm không thành công'
    })
  }
}

export default {
  login,
  addUser,
  deleteUser,
  updateUser,
  getAllUsers,
  getAllGroup,
  getAllProducts,
  getDetailsProduct
}

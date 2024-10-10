import express from 'express'
import userModel from '../models/userModel'

const getHomePage = async (
  req,
  res
) => {
  let userData =
    await userModel.getAllUsers()

  return res.render('main', {
    data: {
      title: 'Home Page',
      page: 'home',
      rows: userData
    }
  })
}

const getAddUserPage = async (
  req,
  res
) => {
  let userData =
    await userModel.getAllUsers()

  return res.render('main', {
    data: {
      title: 'Add User Page',
      page: 'addUser'
    }
  })
}

const addUser = async (req, res) => {
  const {
    username,
    fullname,
    address
  } = req.body
  try {
    const newUserId =
      await userModel.addUser(
        username,
        fullname,
        address
      )
    return res.redirect('/')
  } catch (error) {
    console.error(
      'Error adding user:',
      error
    )
    return res
      .status(500)
      .send('Error adding user')
  }
}

const updateUser = async (req, res) => {
  const {
    id,
    username,
    fullname,
    address
  } = req.body

  try {
    const updatedRows =
      await userModel.updateUser(
        id,
        username,
        fullname,
        address
      )
    return res.redirect('/')
  } catch (error) {
    console.error(
      'Error updating user:',
      error
    )
    return res
      .status(500)
      .send('Error updating user')
  }
}

const deleteUser = async (req, res) => {
  const { id } = req.params

  try {
    const deletedRows =
      await userModel.deleteUser(id)
    return res.redirect('/')
  } catch (error) {
    console.error(
      'Error deleting user:',
      error
    )
    return res
      .status(500)
      .send('Error deleting user')
  }
}
export default {
  getHomePage,
  addUser,
  updateUser,
  deleteUser,
  getAddUserPage
}

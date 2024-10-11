import express from 'express'
import userModel from '../models/userModel'

const getHomePage = async (
  req,
  res
) => {
  try {
    let userData =
      await userModel.getAllUsers()

    return res.render('main', {
      data: {
        title: 'Home Page',
        page: 'home',
        rows: userData
      }
    })
  } catch (error) {
    return res.render('error', {
      data: {
        title: 'Error',
        page: 'error'
      }
    })
  }
}

const addUser = async (req, res) => {
  const {
    username,
    fullname,
    address,
    email
  } = req.body

  try {
    const newUserId =
      await userModel.addUser(
        username,
        fullname,
        address,
        email
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
    usernameUpdate,
    fullnameUpdate,
    addressUpdate,
    emailUpdate,
  } = req.body

  const idUpdate = req.params.id

  try {
    const updatedRows =
      await userModel.updateUser(
        idUpdate,
        usernameUpdate,
        fullnameUpdate,
        addressUpdate,
        emailUpdate,
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
  deleteUser
}

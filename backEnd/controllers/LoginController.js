import express from 'express'
import userModel from '../models/userModel'
import bcrypt from 'bcryptjs'

const getLoginPage = (req, res) => {
  return res.render('main', {
    data: {
      title: 'Login',
      page: 'login'
    },
    messages: req.flash('error')
  })
}

const handleLogin = async (req, res) => {
  const { username, password } = req.body

  try {
    const rows = await userModel.getOneUser(username)

    if (rows.length === 0) {
      req.flash('error', 'Tài khoản không tồn tại')
      res.status(401).redirect('/login')
      return
    }

    const user = rows[0]

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      req.flash('error', 'Mật khẩu không chính xác')
      res.status(401).redirect('/login')
      return
    }

    req.session.user = {
      id: user.id,
      username: user.username,
      fullname: user.fullname,
      role: user.role,
      address: user.address,
      sex: user.sex
    }

    return res.redirect('/')
  } catch (err) {
    console.error(err)
    return res.status(500).json({ message: 'Server error' })
  }
}

export default { getLoginPage, handleLogin }

import express from 'express'
import middleWare from './middleWare'
import HomePage from '../controllers/HomeController'
import getAboutPage from '../controllers/AboutController'
import getContactPage from '../controllers/ContactController'
import LoginController from '../controllers/LoginController'
import GroupController from '../controllers/GroupController'
import ProductController from '../controllers/ProductController'

const router = express.Router()

const initWebRoute = (app) => {
  // [GET]
  router.get('/', HomePage.getHomePage)
  router.get('/login', LoginController.getLoginPage)
  router.get('/logout', (req, res) => {
    req.session.destroy()
    return res.redirect('/')
  })
  router.get(
    '/delete-user/:id',
    middleWare.checkUserPermissionUpdate,
    HomePage.deleteUser
  )
  router.get('/about', getAboutPage)
  router.get('/contact', getContactPage)
  router.get('/group', GroupController.getGroupPage)
  router.get('/product', ProductController.getProductPage)

  // [POST]
  router.post('/login', LoginController.handleLogin)
  router.post('/add-user', middleWare.checkUserPermissionAdd, HomePage.addUser)
  router.post(
    '/update-user/:id',
    middleWare.checkUserPermissionUpdate,
    HomePage.updateUser
  )

  router.get('/not-found', (req, res) => {
    res.render('notFound')
  })
  router.use('*', (req, res) => {
    res.redirect('/not-found') // Chuyển hướng đến đường dẫn cụ thể
  })

  return app.use('/', router)
}

export default initWebRoute

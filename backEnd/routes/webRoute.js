import express from 'express'
import HomePage from '../controllers/HomeController'
import getAboutPage from '../controllers/AboutController'
import getContactPage from '../controllers/ContactController'
const router = express.Router()
const initWebRoute = (app) => {
  app.get('/', HomePage.getHomePage)

  app.post(
    '/add-user',
    HomePage.addUser
  )

  app.post(
    '/update-user/:id',
    HomePage.updateUser
  )

  app.get(
    '/delete-user/:id',
    HomePage.deleteUser
  )

  app.get('/about', getAboutPage)

  app.get('/contact', getContactPage)

  app.get('/not-found', (req, res) => {
    res.render('notFound')
  })

  app.use('*', (req, res) => {
    res.redirect('/not-found') // Chuyển hướng đến đường dẫn cụ thể
  })


}

export default initWebRoute

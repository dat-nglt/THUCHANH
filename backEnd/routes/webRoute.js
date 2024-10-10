import express from 'express'
import HomePage from '../controllers/HomeController'
import getAboutPage from '../controllers/AboutController'
import getContactPage from '../controllers/ContactController'
const router = express.Router()
const initWebRoute = (app) => {
  app.get('/', HomePage.getHomePage)

  app.get(
    '/add-user-page',
    HomePage.getAddUserPage
  )

  app.post(
    '/add-user-page',
    HomePage.addUser
  )

  app.get(
    '/delete-user/:id',
    HomePage.deleteUser
  )

  app.get('/about', getAboutPage)

  app.get('/contact', getContactPage)
}

export default initWebRoute

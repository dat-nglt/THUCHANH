import express from 'express'
import ApiController from '../controllers/ApiController'
import middleWare from './middleWare'
import authenticateJWT from '../middleware/authMiddleware'

const router = express.Router()

const initApiRoute = (app) => {
  router.get(
    '/get-all-users',
    middleWare.checkUserPermissionUpdateAPI,
    ApiController.getAllUsers
  )

  router.get('/get-all-group', authenticateJWT, ApiController.getAllGroup)

  router.get('/get-all-products', authenticateJWT, ApiController.getAllProducts)

  router.get('/get-details-products/:id', authenticateJWT, ApiController.getDetailsProduct)

  router.post('/login', ApiController.login)

  router.post(
    '/add-user',
    middleWare.checkUserPermissionUpdateAPI,
    ApiController.addUser
  )
  router.put(
    '/update-user/:id',
    middleWare.checkUserPermissionUpdateAPI,
    ApiController.updateUser
  )
  router.delete(
    '/delete-user/:id',
    middleWare.checkUserPermissionUpdateAPI,
    ApiController.deleteUser
  )

  return app.use('/api/v1', router)
}

export default initApiRoute

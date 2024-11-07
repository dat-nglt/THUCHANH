import express from 'express'
import ApiController from '../controllers/ApiController'
import middleWare from './middleWare'

const router = express.Router()

const initApiRoute = (app) => {
  router.get(
    '/get-all-users',
    middleWare.checkUserPermissionUpdateAPI,
    ApiController.getAllUsers
  )

  router.get(
    '/get-all-group',
    ApiController.getAllGroup
  )

  router.get(
    '/get-all-products',
    ApiController.getAllProducts
  )

  router.get(
    '/get-details-products/:id',
    ApiController.getDetailsProduct
  )

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

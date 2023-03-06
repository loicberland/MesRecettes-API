import express from 'express'
import { userController } from '~/app/controllers/userController'
import { controllerHandler } from '~/app/helpers/controllerHandler'
const router = express.Router()

router.post('/login', controllerHandler(userController.login))

export default router

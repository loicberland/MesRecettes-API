import express from 'express'
import { userController } from '~/app/controllers/userController'
import { controllerHandler } from '~/app/helpers/controllerHandler'
import { userLogin } from '~/app/validation/schemas/user'
import { validator } from '~/app/validation/validator'
const router = express.Router()

router.post('/login', validator(userLogin, 'body'), controllerHandler(userController.login))

export default router

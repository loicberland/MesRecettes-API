import express from 'express'
import { userController } from '~/app/controllers/userController'
const router = express.Router()

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.post('/login', userController.login)

export default router

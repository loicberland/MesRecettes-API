import User from '~/app/models/User'
import { type Response } from 'express'
import type { LoginRequest } from '~/app/types/dataMapper'

export const userController = {
	login: async (req: LoginRequest, res: Response): Promise<void> => {
		const { email /* ,password */ } = req.body
		const user = await User.findByEmail(email)
		console.log(user)
	}
}

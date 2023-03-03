import User from '~/app/models/User'
import { type Response } from 'express'
import type { LoginRequest } from '~/app/types/dataMapper'
import HttpError from '../errors/HTTPError'

export const userController = {
	login: async (req: LoginRequest, res: Response): Promise<void> => {
		const { email, password } = req.body
		const user = await User.findByEmail(email)
		if (user === undefined) throw new HttpError<string>(404, 'Utilisateur incorect', email)
		console.log(user, password)
	}
}

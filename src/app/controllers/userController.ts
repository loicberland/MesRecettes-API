import User from '~/app/models/User'
import bcrypt from 'bcrypt'
import { type Response } from 'express'
import type { LoginRequest } from '~/app/types/dataMapper'
import HttpError from '../errors/HTTPError'

export const userController = {
	login: async (req: LoginRequest, res: Response): Promise<Response> => {
		const { email, password } = req.body
		const user = await User.findByEmail(email)
		if (user === undefined) throw new HttpError<{ email: string }>(404, 'Email incorect', { email })
		// if (user.password !== null) {
		const isGoodPassword = await bcrypt.compare(password, user.password)
		if (isGoodPassword === false) throw new HttpError(401, 'Mot de passe incorect')
		// }
		// delete user.password
		return res.json(user)
	}
}

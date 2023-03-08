import User from '~/app/models/User'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { type Response } from 'express'
import type { LoginRequest } from '~/app/types/dataMapper'
import HttpError from '~/app/errors/HTTPError'

export const userController = {
	login: async (req: LoginRequest, res: Response): Promise<Response> => {
		const { email, password } = req.body
		const user = await User.findByEmail(email)
		if (user === undefined) throw new HttpError(404, 'Email incorect', { key: 'email', value: email })
		if (user.password !== undefined) {
			const isGoodPassword = await bcrypt.compare(password, user.password)
			if (!isGoodPassword) throw new HttpError(401, 'Mot de passe incorect', { key: 'password' })
		}
		let token
		if (typeof (process.env.SECRET_HASH) === 'string') {
			token = jwt.sign(user, process.env.SECRET_HASH, { expiresIn: process.env.EXPIRES_TOKEN })
		}
		delete user.password
		const userConnected = { user, token }
		return res.json(userConnected)
	}
}

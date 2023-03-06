import type express from 'express'
import jwt from 'jsonwebtoken'

export const verifyToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
	const token = req.headers.authorization

	if (token === undefined) {
		return res.status(401).send('Unauthorized')
	}

	try {
		if (typeof (process.env.SECRET_HASH) === 'string') {
			jwt.verify(token, process.env.SECRET_HASH)
		}
		next()
	} catch (e) {
		return res.status(401).send('Unauthorized')
	}
}

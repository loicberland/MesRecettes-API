import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import HttpError from '../errors/HTTPError'

export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	let status = 0
	let message = ''
	if (err instanceof HttpError) {
		console.log(1)
		status = err.statusCode ?? 404
		message = err.message
	} else {
		console.log(2)
		status = 500
		message = err.message
	}
	res.status(status).json({ message })
}

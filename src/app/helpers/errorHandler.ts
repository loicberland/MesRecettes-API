import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import HttpError from '../errors/HTTPError'

export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	let status = 0
	let message = ''
	let data = {}
	if (err instanceof HttpError) {
		console.log('HttpError')
		status = err.statusCode ?? 404
		message = err.message
		data = err.data
	} else {
		console.log('Other errors')
		status = 500
		message = err.message
	}
	res.status(status).json({ message, data })
}

import type { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import HttpError from '~/app/errors/HTTPError'
import type { ValidationError } from 'joi'

interface JoiError extends Error {
  isJoi: true
  details: ValidationError['details']
}

export const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
	const joiError = err as JoiError
	let status: number
	let message: string
	let data: { key?: string, value?: string } | undefined
	if (err instanceof HttpError) {
		console.log('HttpError')
		status = err.statusCode ?? 404
		message = err.message
		data = err.data
	} else if (joiError.isJoi) {
		const key = joiError.details[0]?.context?.key
		const value = joiError.details[0]?.context?.value
		console.log('Joi errors')
		status = 400
		message = joiError.message
		data = { key, value }
	} else {
		console.log('Other errors')
		status = 500
		message = err.message
	}
	res.status(status).json({ message, data })
}

export default class HttpError<T> extends Error {
	statusCode: number
	data: T | undefined

	constructor (statusCode: number, message: string, data?: T) {
		super(message)
		this.statusCode = statusCode
		this.data = data
		this.name = 'HttpError'
	}
}

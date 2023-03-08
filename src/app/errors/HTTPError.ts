export default class HttpError extends Error {
	statusCode: number
	data: { key: string, value?: string } | undefined

	constructor (statusCode: number, message: string, data?: { key: string, value?: string }) {
		super(message)
		this.statusCode = statusCode
		this.data = data
		this.name = 'HttpError'
	}
}

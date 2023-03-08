import Joi, { type Schema } from 'joi'

export const userLogin: Schema = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().pattern(/^[a-zA-Z0-9]{4,30}$/).required()
})

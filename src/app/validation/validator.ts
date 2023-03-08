import type { Request, Response, NextFunction } from 'express'
import type { Schema } from 'joi'

type DataType = 'query' | 'body' | 'params'

export const validator = (schema: Schema, dataType: DataType) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validateAsync(req[dataType])
			next()
		} catch (err) {
			next(err)
		}
	}
}

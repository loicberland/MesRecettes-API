import type { Request, Response, NextFunction } from 'express'

export const controllerHandler = (controller: Function) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await controller(req, res, next)
	} catch (err) {
		next(err)
	}
}

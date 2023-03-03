import type { Request, Response, NextFunction } from 'express'

// eslint-disable-next-line @typescript-eslint/ban-types
export const controllerHandler = (controller: Function) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await controller(req, res, next)
	} catch (err) {
		next(err)
	}
}

import { NextFunction, Request, Response } from "express";
import { IRequestValidatorSchema } from "./types";

export function requestValidator(schema: IRequestValidatorSchema) {
	return async (request: Request, response: Response, next: NextFunction) => {
		try {
			if (schema.pathParamsSchema) {
				await schema.pathParamsSchema.validateAsync(request.params);
			}
			if (schema.queryParamsSchema) {
				await schema.queryParamsSchema.validateAsync(request.query);
			}
			if (schema.bodySchema) {
				await schema.bodySchema.validateAsync(request.body);
			}
			next();
		} catch (e) {
			next(e);
		}
	};
}

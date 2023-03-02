import { requestValidator } from "./requestValidator";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
	name: Joi.string().required(),
});

describe("Request Validator Middleware", () => {
	it("Should call next function without any argument if path params are valid", async () => {
		const validateMiddleware = requestValidator({
			pathParamsSchema: schema,
		});
		const fakeRequest: Request = {
			params: {
				name: "myacuvue",
			},
		} as any as Request;
		const fakeResponse: Response = {} as any as Response;
		const nextFunction: NextFunction = jest.fn();
		await validateMiddleware(fakeRequest, fakeResponse, nextFunction);
		expect(nextFunction).toHaveBeenCalledWith();
	});
	it("Should call next function with error if path params are invalid", async () => {
		const validateMiddleware = requestValidator({
			pathParamsSchema: schema,
		});
		const fakeRequest: Request = {
			params: {
				name: 12345,
			},
		} as any as Request;
		const fakeResponse: Response = {} as any as Response;
		const nextFunction: NextFunction = jest.fn();
		await validateMiddleware(fakeRequest, fakeResponse, nextFunction);
		expect(nextFunction).toHaveBeenCalledWith(
			expect.objectContaining({
				details: expect.arrayContaining([
					expect.objectContaining({
						message: expect.any(String),
						path: expect.any(Array),
						type: expect.any(String),
						context: expect.any(Object),
					}),
				]),
			})
		);
	});
	it("Should call next function without any argument if query params are valid", async () => {
		const validateMiddleware = requestValidator({
			queryParamsSchema: schema,
		});
		const fakeRequest: Request = {
			query: {
				name: "myacuvue",
			},
		} as any as Request;
		const fakeResponse: Response = {} as any as Response;
		const nextFunction: NextFunction = jest.fn();
		await validateMiddleware(fakeRequest, fakeResponse, nextFunction);
		expect(nextFunction).toHaveBeenCalledWith();
	});
	it("Should call next function with error if query params are invalid", async () => {
		const validateMiddleware = requestValidator({
			queryParamsSchema: schema,
		});
		const fakeRequest: Request = {
			query: {
				name: 12345,
			},
		} as any as Request;
		const fakeResponse: Response = {} as any as Response;
		const nextFunction: NextFunction = jest.fn();
		await validateMiddleware(fakeRequest, fakeResponse, nextFunction);
		expect(nextFunction).toHaveBeenCalledWith(
			expect.objectContaining({
				details: expect.arrayContaining([
					expect.objectContaining({
						message: expect.any(String),
						path: expect.any(Array),
						type: expect.any(String),
						context: expect.any(Object),
					}),
				]),
			})
		);
	});
	it("Should call next function without any argument if body params are valid", async () => {
		const validateMiddleware = requestValidator({
			bodySchema: schema,
		});
		const fakeRequest: Request = {
			body: {
				name: "myacuvue",
			},
		} as any as Request;
		const fakeResponse: Response = {} as any as Response;
		const nextFunction: NextFunction = jest.fn();
		await validateMiddleware(fakeRequest, fakeResponse, nextFunction);
		expect(nextFunction).toHaveBeenCalledWith();
	});
	it("Should call next function with error if body params are invalid", async () => {
		const validateMiddleware = requestValidator({
			bodySchema: schema,
		});
		const fakeRequest: Request = {
			body: {
				name: 12345,
			},
		} as any as Request;
		const fakeResponse: Response = {} as any as Response;
		const nextFunction: NextFunction = jest.fn();
		await validateMiddleware(fakeRequest, fakeResponse, nextFunction);
		expect(nextFunction).toHaveBeenCalledWith(
			expect.objectContaining({
				details: expect.arrayContaining([
					expect.objectContaining({
						message: expect.any(String),
						path: expect.any(Array),
						type: expect.any(String),
						context: expect.any(Object),
					}),
				]),
			})
		);
	});
});

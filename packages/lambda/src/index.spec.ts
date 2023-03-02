import app from "@ecommerce_dashboard/server";
import serverlessExpress from "@vendia/serverless-express";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

jest.mock("@ecommerce_dashboard/server");
jest.mock("@vendia/serverless-express");

describe("Lambda", () => {
	it("should call Express server", async () => {
		const handlerFunction = jest
			.fn()
			.mockReturnValue({ example: "result" });

		(serverlessExpress as jest.Mock).mockReturnValue(handlerFunction);
		const { handler } = require("./index");

		const event = {} as APIGatewayProxyEvent;
		const context = {} as Context;
		const callback = jest.fn();

		const result = await handler(event, context, callback);

		expect(serverlessExpress).toHaveBeenCalledWith({ app });
		expect(handlerFunction).toHaveBeenCalled();
		expect(result).toEqual({ example: "result" });
	});
});

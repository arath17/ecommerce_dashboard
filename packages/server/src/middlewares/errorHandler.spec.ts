import { NextFunction, Request, Response } from "express";
import { errorHandler } from "./errorHandler";

describe("errorHandler Middleware", () => {
  it("Should return joi validation error response.", () => {
    const errorObj = {
      isJoi: true,
      details: {},
    } as any as Error;
    const fakeRequest: Request = {
      id: 12345,
    } as any as Request;
    const fakeResponse: Response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      end: jest.fn().mockReturnThis(),
      setHeader: jest.fn().mockReturnThis(),
    } as any as Response;
    const nextFunction: NextFunction = jest.fn();
    const response = errorHandler(
      errorObj,
      fakeRequest,
      fakeResponse,
      nextFunction
    );
    expect(response).toBe(fakeResponse);
    expect(fakeResponse.status).toHaveBeenCalledWith(400);
    expect(fakeResponse.end).toHaveBeenCalled();
    expect(nextFunction).not.toHaveBeenCalled();
  });

  it("Should return internal server error response when responseStatusCode is undefined", () => {
    const fakeRequest: Request = {
      id: 12345,
    } as any as Request;
    const fakeResponse: Response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
      end: jest.fn().mockReturnThis(),
      setHeader: jest.fn().mockReturnThis(),
    } as any as Response;
    const nextFunction: NextFunction = jest.fn();
    const response = errorHandler(
      new Error("Dummy error"),
      fakeRequest,
      fakeResponse,
      nextFunction
    );
    expect(response).toBe(fakeResponse);
    expect(fakeResponse.status).toHaveBeenCalledWith(500);
    expect(fakeResponse.end).toHaveBeenCalled();
    expect(nextFunction).not.toHaveBeenCalled();
  });
});

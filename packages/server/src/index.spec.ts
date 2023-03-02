import server from "./index";
import request from "supertest";
import { Request, Response } from "express";
import { TestRequestHandler } from "./requestHandlers/test/test";

jest.mock("./requestHandlers/test/test");

describe("server", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("Test Router", () => {
    it("should call get test handler", async (done) => {
      const mockResponseBody: string = "Dummy response";
      (TestRequestHandler.test as jest.Mock).mockImplementation(
        (_request: Request, response: Response) => {
          return response.send(mockResponseBody).end();
        }
      );
      const testResponse = await request(server).get(
        "/v1/test"
      );

      expect(testResponse.status).toBe(200);
      expect(testResponse.body).toStrictEqual(mockResponseBody);
      expect(TestRequestHandler.test).toHaveBeenCalled();
      done();
    });
  });
});

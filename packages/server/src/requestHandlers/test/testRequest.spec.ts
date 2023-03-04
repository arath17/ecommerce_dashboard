import { TestRequestHandler } from "./testRequest";
import {
  Test,
  Version,
} from "@ecommerce_dashboard/business";
import { Response, Request } from "express";

jest.mock("express");
jest.mock("@ecommerce_dashboard/business");

describe("Test Request Handler", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("test()", () => {
    const dummyVersion: Version = "v1";

    it("should successfully respond", async () => {
      const dummyResponse: string = "Dummy response";
      const mockRequest = {
        params: {
          version: dummyVersion,
        },
      } as unknown as Request;
      const mockResponse = {
        send: jest.fn().mockReturnThis(),
        end: jest.fn().mockResolvedValue(dummyResponse),
      } as unknown as Response;
      (Test.test as jest.Mock).mockResolvedValue(dummyResponse);

      await TestRequestHandler.test(mockRequest, mockResponse);

      expect(Test.test).toHaveBeenCalledWith("v1");
      expect(mockResponse.send).toHaveBeenCalledWith("Dummy response");
      expect(mockResponse.end).toHaveBeenCalled();
    });

    it("should throw error", async () => {
      expect.assertions(2);
      const mockRequest = {
        params: {
          version: dummyVersion,
        },
      } as unknown as Request;
      const mockResponse = {
        send: jest.fn().mockReturnThis(),
        end: jest.fn().mockResolvedValue(""),
      } as unknown as Response;
      (Test.test as jest.Mock).mockRejectedValue(
        new Error("test error")
      );

      try {
        await TestRequestHandler.test(mockRequest, mockResponse);
      } catch (error) {
        expect(error).toHaveProperty("message", "test error");
      }
      expect(Test.test).toHaveBeenCalledWith(
        "v1"
      );
    });
  });
});

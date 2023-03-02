import testRouter from "./index";
import asyncHandler from "express-async-handler";
import { requestValidator } from "../../middlewares/requestValidator";
import { TestRequestHandler } from "./test";
import { schema as testSchema } from "../../schema/test";

jest.mock("express-async-handler");
jest.mock("../../middlewares/requestValidator");
jest.mock("./test");
jest.mock("../../schema/test");
jest.mock("express", () => ({
  Router: () => ({
    get: jest.fn().mockReturnThis(),
  }),
}));

describe("Test Router", () => {
  it("Should call get test router successfully", () => {
    expect(testRouter.get).toHaveBeenNthCalledWith(
      1,
      "/:version/test",
      expect(requestValidator).toHaveBeenCalledWith(
        testSchema
      ),
      expect(asyncHandler).toHaveBeenCalledWith(
        TestRequestHandler.test
      )
    );
  });
});

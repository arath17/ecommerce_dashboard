import { Router } from "express";
import asyncHandler from "express-async-handler";
import { requestValidator } from "../../middlewares/requestValidator";
import { TestRequestHandler } from "./testRequest";
import { schema as testSchema } from "../../schema/testSchema";

const testRouter = Router();

testRouter
  .get(
    "/:version/test",
    requestValidator(testSchema),
    asyncHandler(TestRequestHandler.test)
  );

export default testRouter;

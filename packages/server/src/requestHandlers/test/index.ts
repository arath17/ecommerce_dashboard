import { Router } from "express";
import asyncHandler from "express-async-handler";
import { requestValidator } from "../../middlewares/requestValidator";
import { TestRequestHandler } from "./test";
import { schema as testSchema } from "../../schema/test";

const testRouter = Router();

testRouter
  .get(
    "/:version/test",
    requestValidator(testSchema),
    asyncHandler(TestRequestHandler.test)
  );

export default testRouter;

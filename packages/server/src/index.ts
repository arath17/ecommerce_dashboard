import express from "express";

import { errorHandler } from "./middlewares/errorHandler";

import testRouter from "./requestHandlers/test";

export default express()
  .use(express.json())
  .use(testRouter)
  .use(errorHandler);

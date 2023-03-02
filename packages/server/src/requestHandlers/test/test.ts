import { Request, Response } from "express";
import { Test } from "@ecommerce_dashboard/business";

async function test(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const {version} = request.params;
    const resp = await Test.test(version as string);

    response.send(resp).end();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error("INTERNAL_SERVER_ERROR");
  }
}

export const TestRequestHandler = {
  test,
};

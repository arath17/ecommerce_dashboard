import { NextFunction, Request, Response } from "express";
import { ValidationError } from "joi";

export function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _next: NextFunction
) {
  if ("isJoi" in error && (error as ValidationError).isJoi) {
    return response.status(400).end();
  }

  return response.status(500).end();
}

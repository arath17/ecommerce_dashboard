import app from "@ecommerce_dashboard/server";
import { APIGatewayProxyHandler } from "aws-lambda";
import serverlessExpress from "@vendia/serverless-express";

export const handler: APIGatewayProxyHandler = serverlessExpress({ app });

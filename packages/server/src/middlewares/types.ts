import { Schema } from "joi";

export interface IRequestValidatorSchema {
	pathParamsSchema?: Schema;
	queryParamsSchema?: Schema;
	bodySchema?: Schema;
}

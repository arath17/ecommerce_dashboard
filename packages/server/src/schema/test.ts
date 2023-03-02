import Joi from "joi";

const pathParamsSchema = Joi.object({
	version: Joi.string().required()
});

export const schema = {
	pathParamsSchema,
};

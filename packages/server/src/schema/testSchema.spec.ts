import { schema } from "./testSchema";

describe("test Schema", () => {
  it("should successfully validate when version is passed", () => {
    const request = {
      version: "v1",
    };
    const result = schema.pathParamsSchema.validate(request);
    expect(result.error).toBeFalsy();
  });
  it("Should error when version is missing", () => {
    const request = {};
    const result = schema.pathParamsSchema.validate(request);
    expect(result.error?.details[0].message).toBe(`"version" is required`);
  });
});

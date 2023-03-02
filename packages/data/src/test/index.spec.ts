import { Test } from "./index";
import { Version } from "./types";

describe("Test", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  describe("test()", () => {
    it("should return message successfully when version is v1", async () => {
      const dummyVersion: Version = "v1";

      const result = await Test.test(dummyVersion);

      expect(result).toStrictEqual("Test Successfully!");
    });

    it("should throw error when version is not v1", async () => {
      const dummyVersion: Version = "v2";

      expect.assertions(1);

      try {
        await Test.test(dummyVersion);
      } catch (error) {
        expect(Test.test).rejects.toThrow();
      }
    });
  });
});

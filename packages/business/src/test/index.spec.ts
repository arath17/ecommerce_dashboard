import { Test } from "./index";
import { Test as TestData, Version } from "@ecommerce_dashboard/data";

jest.mock("@ecommerce_dashboard/data");

describe("Test", () => {
	beforeEach(() => {
    jest.resetAllMocks();
  });

	const dummyVersion: Version = "v1";

  describe("test()", () => {
    it("should return message successfully when data package return success", async () => {
			(TestData.test as jest.Mock).mockResolvedValueOnce("Dummy test");

      const result = await Test.test(dummyVersion);

      expect(TestData.test).toHaveBeenCalledWith("v1");
			expect(result).toStrictEqual("Dummy test");
    });

    it("should throw error when data package throw error", async () => {
      (TestData.test as jest.Mock).mockRejectedValueOnce(new Error("Dummy error"));

			expect.assertions(1);

      try {
        await Test.test(dummyVersion);
      } catch (error) {
				expect(TestData.test).toHaveBeenCalledWith("v1");
        // expect(Test.test).rejects.toThrow();
      }
    });
  });
});

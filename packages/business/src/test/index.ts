import { Test as TestData, Version } from "@ecommerce_dashboard/data";

export { Version };

async function test(version: Version): Promise<string> {
	const result = await TestData.test(version);

	return result;
}

export const Test = {
	test,
};

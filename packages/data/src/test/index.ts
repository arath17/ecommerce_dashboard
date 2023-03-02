import { Version } from "./types";

async function test(version: Version): Promise<string> {
  if (version === "v1") {
    return "Test Successfully!";
  }

  throw new Error("Version error");
}

export const Test = {
  test,
};

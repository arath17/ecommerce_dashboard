describe("business", () => {
  it("should expose Test services", async () => {
    const services = require("./index");
    expect(services).toBeTruthy();
    expect(services.Test).toBeTruthy();
  });
});

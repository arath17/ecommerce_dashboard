describe("start", () => {
	beforeEach(() => {
		jest.resetModules();
	});

	it("should start server in the port provided via environment variable", async () => {
		const listen = jest.fn((port, callback) => {
			callback();
		});
		jest.doMock("./index", () => ({ listen }));

		process.env.PORT = "5555";
		require("./start");
		expect(listen).toHaveBeenCalledWith(5555, expect.any(Function));
	});

	it("should start server in port 3001 if port is not provided via environment variable", async () => {
		const listen = jest.fn((port, callback) => {
			callback();
		});
		jest.doMock("./index", () => ({ listen }));

		delete process.env.PORT;
		require("./start");
		expect(listen).toHaveBeenCalledWith(3001, expect.any(Function));
	});
});

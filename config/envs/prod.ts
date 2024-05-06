import { defineConfig } from "../defineConfig";

export default defineConfig({
	environment: "prod",
	todoAPI: {
		host: "localhost",
		port: "8080",
	},
});

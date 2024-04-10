import { defineConfig } from "../defineConfig";

export default defineConfig({
	environment: "production",
	todoAPI: {
		host: "localhost",
		port: "8080",
	},
});

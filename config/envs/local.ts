import { defineConfig } from "../defineConfig";

export default defineConfig({
	environment: "local",
	todoAPI: {
		host: "localhost",
		port: "8080",
	},
});

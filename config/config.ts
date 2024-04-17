import { AppConfig } from "./types";
import prodConfig from "./envs/prod";
import devConfig from "./envs/dev";
import localConfig from "./envs/local";
import dotenv from "dotenv";

function getConfig(): AppConfig {
	dotenv.config();
	const env: Env = process.env as Env;
	const environment: string | undefined = env.ENVIRONMENT;
	switch (environment) {
		case "prod": {
			return prodConfig;
		}
		case "dev": {
			return devConfig;
		}
		case "local": {
			return localConfig;
		}
		default: {
			throw Error(
				"ENVIRONMENT variable has not been set in the .env file"
			);
		}
	}
}

export { getConfig };

export type Environment = "production" | "development" | "local";
export interface APIConfig {
	host: String;
	port: String;
}
export interface AppConfig {
	environment: Environment;
	todoAPI: APIConfig;
}

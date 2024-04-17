export type Environment = "prod" | "dev" | "local";
export interface APIConfig {
	host: String;
	port: String;
}
export interface AppConfig {
	environment: Environment;
	todoAPI: APIConfig;
}

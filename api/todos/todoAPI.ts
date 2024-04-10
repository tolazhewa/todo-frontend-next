import { getConfig } from "@/config/config";
import { AppConfig } from "@/config/types";
import axios, { AxiosInstance } from "axios";

const config: AppConfig = getConfig();
const host: String = config.todoAPI.host;
const port: String = config.todoAPI.port;
const todoAPI: AxiosInstance = axios.create({
	baseURL: `http://${host}:${port}/api`,
	timeout: 1000,
});

export default todoAPI;

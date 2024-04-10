"use server";

import Todo from "@/models/todo";
import todoAPI from "./todoAPI";
import { AxiosResponse } from "axios";

const getTodo = async (todoId: number): Promise<Todo> => {
	try {
		const response: AxiosResponse = await todoAPI.get<Todo>(
			`/todos/${todoId}`
		);
		return response.data;
	} catch (error) {
		console.error("Error fetching todos:", error);
		throw error;
	}
};

export { getTodo };

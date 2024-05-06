"use server";

import Todo from "@/models/todo";
import todoAPI from "../todoAPI";
import { AxiosResponse } from "axios";

const deleteTodo = async (todoId: string): Promise<void> => {
	try {
		const response: AxiosResponse = await todoAPI.delete<Todo>(
			`/todos/${todoId}`
		);
		return;
	} catch (error) {
		console.error("Error fetching todos:", error);
		throw error;
	}
};

export { deleteTodo };

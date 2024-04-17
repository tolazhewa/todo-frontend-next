"use server";

import todoAPI from "./todoAPI";
import Todo from "@/models/todo";

const getTodos = async (): Promise<Todo[]> => {
	try {
		const response = await todoAPI.get<Todo[]>("/todos");
		return response.data;
	} catch (error) {
		console.error("Error fetching todos:", error);
		throw error;
	}
};

export { getTodos };

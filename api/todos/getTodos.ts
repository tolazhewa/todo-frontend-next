"use server";

import todoAPI from "../todoAPI";
import Todo, { TodoSchema } from "@/models/todo";

const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await todoAPI.get("/todos/");
    return response.data
      .map((item: unknown) => TodoSchema.parse(item))
      .sort((a: Todo, b: Todo) => (b.createdDatetime?.getTime() ?? 0) - (a.createdDatetime?.getTime() ?? 0));
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export { getTodos };

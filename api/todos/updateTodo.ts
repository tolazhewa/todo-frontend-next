"use server";

import Todo, { TodoSchema } from "@/models/todo";
import todoAPI from "../todoAPI";
import { AxiosResponse } from "axios";

const updateTodo = async (todo: Todo): Promise<Todo> => {
  try {
    const response: AxiosResponse = await todoAPI.put("/todos/", todo);
    return TodoSchema.parse(response.data);
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export { updateTodo };

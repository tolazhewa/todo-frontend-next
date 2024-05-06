"use server";

import Todo, { TodoSchema } from "@/models/todo";
import todoAPI from "../todoAPI";
import { AxiosResponse } from "axios";

const getTodo = async (todoId: string): Promise<Todo> => {
  try {
    const response: AxiosResponse = await todoAPI.get(`/todos/${todoId}`);
    return TodoSchema.parse(response.data);
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
};

export { getTodo };

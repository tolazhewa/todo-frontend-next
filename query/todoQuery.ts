"use client";

import { createTodo } from "@/api/todos/createTodo";
import { getTodos } from "@/api/todos/getTodos";
import Todo from "@/models/todo";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "./queryProvider";
import { updateTodo } from "@/api/todos/updateTodo";
import { deleteTodo } from "@/api/todos/deleteTodo";
import { getTodo } from "@/api/todos/getTodo";

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () => getTodos(),
  });
};

const useCreateTodoMutation = () => {
  return useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) => createTodo(todo),
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
};

const useUpdateTodoMutation = () => {
  return useMutation<Todo, Error, Todo>({
    mutationFn: (todo: Todo) => updateTodo(todo),
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
};

const useDeleteTodoMutation = () => {
  return useMutation<void, Error, string>({
    mutationFn: (todoId: string) => deleteTodo(todoId),
    onSuccess: () => queryClient.invalidateQueries("todos"),
  });
};

const useGetTodo = (todoId: string) => {
  return useQuery<Todo, Error>({
    queryKey: ["todo", todoId],
    queryFn: () => getTodo(todoId),
  });
};

export { useTodos, useCreateTodoMutation, useDeleteTodoMutation, useUpdateTodoMutation, useGetTodo };

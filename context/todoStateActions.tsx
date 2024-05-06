import { Dispatch } from "react";
import { TodoAction, TodoActionType } from "./todoStateTypes";
import { createTodo } from "@/api/todos/createTodo";
import Todo, { sortTodosByCreatedDateDesc } from "@/models/todo";
import { deleteTodo } from "@/api/todos/deleteTodo";
import { getTodos } from "@/api/todos/getTodos";
import { updateTodo } from "@/api/todos/updateTodo";

export const fetchTodosAction = async (dispatch: Dispatch<TodoAction>): Promise<void> => {
  dispatch({ type: TodoActionType.FETCH_START });
  try {
    const todos = await getTodos();
    todos.sort(sortTodosByCreatedDateDesc);
    dispatch({ type: TodoActionType.FETCH_SUCCESS, payload: todos });
  } catch (e) {
    dispatch({
      type: TodoActionType.FETCH_FAILURE,
      error: e as Error,
    });
  }
};

export const createTodoAction = async (dispatch: Dispatch<TodoAction>, todo: Todo): Promise<void> => {
  dispatch({ type: TodoActionType.CREATE_START });
  try {
    const newTodo: Todo = await createTodo(todo);
    dispatch({ type: TodoActionType.CREATE_SUCCESS, payload: newTodo });
  } catch (e) {
    dispatch({
      type: TodoActionType.CREATE_FAILURE,
      error: e as Error,
    });
  }
};

export const updateTodoAction = async (dispatch: Dispatch<TodoAction>, todo: Todo): Promise<void> => {
  dispatch({ type: TodoActionType.UPDATE_START });
  try {
    const newTodo = await updateTodo(todo);
    dispatch({ type: TodoActionType.UPDATE_SUCCESS, payload: newTodo });
  } catch (e) {
    dispatch({
      type: TodoActionType.UPDATE_FAILURE,
      error: e as Error,
    });
  }
};

export const deleteTodoAction = async (dispatch: Dispatch<TodoAction>, todoId: string): Promise<void> => {
  dispatch({ type: TodoActionType.DELETE_START });
  try {
    deleteTodo(todoId);
    dispatch({ type: TodoActionType.DELETE_SUCCESS, payload: todoId });
  } catch (e) {
    dispatch({
      type: TodoActionType.DELETE_FAILURE,
      error: e as Error,
    });
  }
};

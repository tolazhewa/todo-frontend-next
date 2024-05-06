"use client";

import Todo, { sortTodosByCreatedDateDesc } from "@/models/todo";
import { Dispatch, createContext, useCallback, useContext, useReducer } from "react";
import { TodoAction, TodoActionType, TodoState } from "./todoStateTypes";
import { createTodoAction, deleteTodoAction, fetchTodosAction, updateTodoAction } from "./todoStateActions";

const initialState: TodoState = {
  todos: [],
  loading: true,
  error: undefined,
  message: undefined,
};

const TodoContext = createContext<{
  state: TodoState;
  dispatch: Dispatch<TodoAction>;
  fetchTodos: () => Promise<void>;
  createTodo: (todo: Todo) => Promise<void>;
  updateTodo: (todo: Todo) => Promise<void>;
  deleteTodo: (todoId: string) => Promise<void>;
}>({
  state: initialState,
  dispatch: () => null,
  fetchTodos: async () => {},
  createTodo: async () => {},
  updateTodo: async () => {},
  deleteTodo: async () => {},
});

const reducer = (state: TodoState, action: TodoAction) => {
  switch (action.type) {
    case TodoActionType.FETCH_START:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case TodoActionType.FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        todos: action.payload,
      };
    case TodoActionType.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "Failed to fetch todos.",
      };
    case TodoActionType.CREATE_START:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case TodoActionType.CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        todos: [...state.todos, action.payload].sort(sortTodosByCreatedDateDesc),
      };
    case TodoActionType.CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "Failed to create todo.",
      };
    case TodoActionType.UPDATE_START:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case TodoActionType.UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        todos: [...state.todos.filter((todo) => todo.id != action.payload.id), action.payload].sort(
          sortTodosByCreatedDateDesc
        ),
      };
    case TodoActionType.UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "Failed to update todo.",
      };
    case TodoActionType.DELETE_START:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case TodoActionType.DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: undefined,
        todos: state.todos.filter((todo) => todo.id != action.payload),
      };
    case TodoActionType.DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
        message: "Failed to delete todo.",
      };
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const boundFetchTodos = useCallback(async () => {
    fetchTodosAction(dispatch);
  }, [dispatch]);
  const boundCreateTodo = useCallback(async (todo: Todo) => createTodoAction(dispatch, todo), [dispatch]);
  const boundUpdateTodo = useCallback(async (todo: Todo) => updateTodoAction(dispatch, todo), [dispatch]);
  const boundDeleteTodo = useCallback(async (todoId: string) => deleteTodoAction(dispatch, todoId), [dispatch]);

  return (
    <TodoContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
        fetchTodos: boundFetchTodos,
        createTodo: boundCreateTodo,
        updateTodo: boundUpdateTodo,
        deleteTodo: boundDeleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);

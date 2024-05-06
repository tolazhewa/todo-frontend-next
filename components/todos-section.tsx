"use client";

import React from "react";
import { TodoCreationCard } from "./todo-creation-card";
import { TodoCard } from "./todo-card";
import { useTodos } from "@/query/todoQuery";

const TodosSection: React.FC = () => {
  const { data: todos, isLoading, error } = useTodos();
  if (error) {
    return <div>Error: {error?.message}</div>;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 w-full">
      <TodoCreationCard />
      {todos?.map((todo) => {
        return <TodoCard todo={todo} key={todo.id} />;
      })}
    </div>
  );
};

export default TodosSection;

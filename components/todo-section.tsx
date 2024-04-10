"use client";

import React, { useEffect, useState } from "react";
import { TodoCreationCard } from "./todo-creation-card";
import { TodoCard } from "./todo-card";
import { useTodoContext } from "@/context/todoContext";

const TodoSection: React.FC = () => {
	const { state, fetchTodos } = useTodoContext();

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<div className="flex min-h-screen flex-col items-center gap-4 w-full">
			<TodoCreationCard />
			{state.todos.map((todo, index) => {
				return <TodoCard todo={todo} key={index} />;
			})}
		</div>
	);
};

export default TodoSection;

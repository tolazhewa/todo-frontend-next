"use client";

import { FormEvent, useRef } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import Todo from "@/models/todo";
import { useTodoContext } from "@/context/todoContext";

export function TodoCreationCard() {
	const { state, createTodo } = useTodoContext();
	const textRef = useRef<HTMLInputElement>(null);

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (textRef.current == null || textRef.current.value.length == 0) {
			return;
		}
		const newTodo: Todo = {
			title: textRef.current.value,
			userId: "1",
			completed: false,
		};

		await createTodo(newTodo);
		textRef.current.value = "";
	};

	return (
		<Card className="w-full max-w-xl">
			<CardContent className="space-y-4 pt-4">
				<CardTitle>Create Todo</CardTitle>
				<form
					onSubmit={onSubmit}
					className="flex w-full items-center space-x-2"
				>
					<Input
						disabled={state.loading}
						type="text"
						placeholder="Enter todo..."
						ref={textRef}
					/>
					<Button variant="ghost" disabled={state.loading}>
						Create
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}

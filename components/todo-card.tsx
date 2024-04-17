"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CardTitle, CardContent, Card } from "@/components/ui/card";
import { FaTrash, FaPencil } from "react-icons/fa6";
import Todo from "@/models/todo";
import { useTodoContext } from "@/context/todoContext";

interface TodoCardProps {
	todo: Todo;
}

export function TodoCard(props: TodoCardProps) {
	const { deleteTodo } = useTodoContext();
	return (
		<Card className="min-w-96 w-full max-w-2xl">
			<CardContent className="flex flex-row items-start gap-4 p-6">
				<div className="flex items-center align-middle">
					<Checkbox id="todo" />
				</div>
				<div className="flex-1">
					<div className="flex items-center align-middle gap-4">
						<div className="flex-1">
							<CardTitle>{props.todo.title}</CardTitle>
						</div>
					</div>
				</div>
				<div className="gap-2 flex flex-row">
					<FaTrash
						className="cursor-pointer"
						onClick={(_) => {
							if (props.todo.id) {
								deleteTodo(props.todo.id);
							}
						}}
					/>
					<FaPencil className="cursor-pointer" />
				</div>
			</CardContent>
		</Card>
	);
}

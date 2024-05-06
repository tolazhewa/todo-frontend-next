"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { CardTitle, CardContent, Card } from "@/components/ui/card";
import { FaTrash, FaPencil } from "react-icons/fa6";
import { FaCheck, FaTimes } from "react-icons/fa";
import Todo from "@/models/todo";
import { Input } from "./ui/input";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useDeleteTodoMutation, useUpdateTodoMutation } from "@/query/todoQuery";
import { CheckedState } from "@radix-ui/react-checkbox";

interface TodoCardProps {
  todo: Todo;
}

export function TodoCard({ todo }: TodoCardProps) {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(todo.title);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateTodo = useUpdateTodoMutation();

  const deleteTodo = useDeleteTodoMutation();

  const handleCompletionChange = (checked: CheckedState) => {
    if (checked != "indeterminate") {
      updateTodo.mutate({ ...todo, completed: checked });
    }
  };

  const titleUpdateSubmit = () => {
    setEditMode(false);
    if (todo.title != newTitle) {
      updateTodo.mutate({ ...todo, title: newTitle });
    }
  };

  const titleUpdateCancel = () => {
    setEditMode(false);
    setNewTitle(todo.title);
  };

  const handleEdit = () => {
    setEditMode(true);
    setNewTitle(todo.title);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const inputOnKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!editMode) {
      return;
    }
    switch (event.key) {
      case "Enter":
        titleUpdateSubmit();
        break;
      case "Escape":
        titleUpdateCancel();
        break;
    }
  };

  const handleDelete = () => {
    if (todo.id) {
      deleteTodo.mutate(todo.id);
    }
  };

  return (
    <Card className="min-w-96 w-full max-w-2xl">
      <CardContent className="flex flex-row items-center gap-4 p-6">
        <div className="flex items-center align-middle">
          <Checkbox checked={todo.completed} onCheckedChange={handleCompletionChange} />
        </div>
        <div className="flex-1">
          <div className="flex items-center align-middle gap-4">
            {editMode && (
              <Input
                className="align-middle"
                type={"text"}
                value={newTitle}
                ref={inputRef}
                onKeyDown={inputOnKeyDown}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setNewTitle(event.target.value);
                }}
              />
            )}
            {!editMode && (
              <div className="flex-1">
                <CardTitle>{todo.title}</CardTitle>
              </div>
            )}
          </div>
        </div>
        <div className="gap-2 flex flex-row align-middle">
          {editMode && (
            <FaTimes
              className="cursor-pointer"
              onClick={() => {
                titleUpdateCancel();
              }}
            />
          )}
          {editMode && <FaCheck className="cursor-pointer" onClick={titleUpdateSubmit} />}
          {!editMode && <FaTrash className="cursor-pointer" onClick={handleDelete} />}
          {!editMode && <FaPencil className="cursor-pointer" onClick={handleEdit} />}
        </div>
      </CardContent>
    </Card>
  );
}

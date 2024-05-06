import { z } from "zod";

export const TodoSchema = z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  title: z.string(),
  completed: z.boolean(),
  createdDatetime: z
    .string()
    .optional()
    .transform((dateString) => (dateString ? new Date(dateString) : undefined)),
  updatedDatetime: z
    .string()
    .optional()
    .transform((dateString) => (dateString ? new Date(dateString) : undefined)),
});

type Todo = z.infer<typeof TodoSchema>;

export default Todo;

export const sortTodosByCreatedDateDesc = (todo1: Todo, todo2: Todo): number => {
  if (todo1.createdDatetime && todo2.createdDatetime) {
    return todo2.createdDatetime.getTime() - todo1.createdDatetime.getTime();
  }
  return 0;
};

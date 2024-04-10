import TodoSection from "@/components/todo-section";
import { Label } from "@/components/ui/label";
import { TodoContextProvider } from "@/context/todoContext";

export default async function Home() {
	return (
		<main className="flex flex-col items-center p-24 gap-6">
			<div className="flex flex-col items-center gap-2 pb-10">
				<Label className="text-4xl font-bold">Todo</Label>
				<Label className="text-sm text-gray-400">
					Stay organized and get things done
				</Label>
			</div>
			<TodoContextProvider>
				<TodoSection />
			</TodoContextProvider>
		</main>
	);
}

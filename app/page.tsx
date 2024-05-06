import { pingAPI } from "@/api/pingAPI";
import TodosSection from "@/components/todos-section";
import { Label } from "@/components/ui/label";
import ErrorBoundary from "./error";
import QueryProvider from "@/query/queryProvider";

export default async function Home() {
  const serverStatus = await pingAPI();

  return (
    <main className="flex flex-col items-center p-24 gap-6">
      <div className="flex flex-col items-center gap-2 pb-10">
        <Label className="text-4xl font-bold">Todo</Label>
        <Label className="text-sm text-gray-400">Stay organized and get things done</Label>
      </div>
      {!serverStatus && <div className="bg-red-500 text-white p-4 w-full text-center">Backend server is down</div>}
      {serverStatus && (
        <QueryProvider>
          <ErrorBoundary>
            <TodosSection />
          </ErrorBoundary>
        </QueryProvider>
      )}
    </main>
  );
}

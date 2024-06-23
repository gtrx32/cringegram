import TodoList from "@/components/TodoList";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Todos() {
  const { todos } = useAppSelector((state) => state.todos);

  return <TodoList todos={todos} />;
}

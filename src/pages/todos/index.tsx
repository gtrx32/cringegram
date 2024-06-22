import TodoCard from "@/components/TodoList/TodoCard";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Todos() {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoCard todo={todo} />
      ))}
    </ul>
  );
}

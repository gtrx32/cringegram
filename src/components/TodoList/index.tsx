import { Todo } from "@/types/todo";
import { FC } from "react";
import TodoCard from "./TodoCard";
import s from "./TodoList.module.scss";

interface TodoListProps {
  todos: Todo[];
}

const TodoList: FC<TodoListProps> = ({ todos }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Todos</h2>
      <div className={s.list}>
        {todos && todos.map((todo) => <TodoCard key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
};

export default TodoList;

import { Todo } from "@/types/todo";
import { FC } from "react";
import s from "./TodoCard.module.scss";
import TodoAddButton from "@/components/UI/AddButton/TodoAddButton";

interface TodoCardProps {
  todo: Todo;
}

const TodoCard: FC<TodoCardProps> = ({ todo }) => {
  return (
    <div className={s.todoCard}>
      <h3>{todo.title}</h3>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
      <TodoAddButton todo={todo} />
    </div>
  );
};

export default TodoCard;

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
      <div className={s.todoInfo}>
        <h3 className={s.title}>{todo.title}</h3>
        <p className={s.status}>
          Status: {todo.completed ? "Completed" : "Not Completed"}
        </p>
      </div>
      <TodoAddButton todo={todo} />
    </div>
  );
};

export default TodoCard;

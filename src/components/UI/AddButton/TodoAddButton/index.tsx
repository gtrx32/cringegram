import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { Todo } from "@/types/todo";
import clsx from "clsx";
import { ComponentPropsWithRef, FC } from "react";
import Button from "../../Button";
import s from "../AddButton.module.scss";

interface TodoAddButtonProps extends ComponentPropsWithRef<"button"> {
  todo: Todo;
}

const TodoAddButton: FC<TodoAddButtonProps> = ({
  className,
  todo,
  ...props
}) => {
  const { todos } = useAppSelector((state) => state.todos);
  const { addTodo, removeTodo } = useActions();

  const isExists = todos.some((el) => el.id === todo.id);

  const addHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    todo: Todo
  ) => {
    event.preventDefault();
    addTodo(todo);
  };

  const removeHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    todo: Todo
  ) => {
    event.preventDefault();
    removeTodo(todo);
  };

  return (
    <Button
      className={clsx(className, isExists ? s.removeButton : s.addButton)}
      onClick={
        isExists
          ? (event) => removeHandler(event, todo)
          : (event) => addHandler(event, todo)
      }
      {...props}
    >
      {isExists ? "Remove" : "Add"}
    </Button>
  );
};

export default TodoAddButton;

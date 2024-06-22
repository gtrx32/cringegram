import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import { User } from "@/types/user";
import clsx from "clsx";
import { ComponentPropsWithRef, FC } from "react";
import Button from "../../Button";
import s from "../AddButton.module.scss";

interface UserAddButtonProps extends ComponentPropsWithRef<"button"> {
  user: User;
}

const UserAddButton: FC<UserAddButtonProps> = ({
  className,
  user,
  ...props
}) => {
  const { users } = useAppSelector((state) => state.users);
  const { addUser, removeUser } = useActions();

  const isExists = users.some((el) => el.id === user.id);

  const addHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    user: User
  ) => {
    event.preventDefault();
    addUser(user);
  };

  const removeHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    user: User
  ) => {
    event.preventDefault();
    removeUser(user);
  };

  return (
    <Button
      className={clsx(className, isExists ? s.removeButton : s.addButton)}
      onClick={
        isExists
          ? (event) => removeHandler(event, user)
          : (event) => addHandler(event, user)
      }
      {...props}
    >
      {isExists ? "Unsubscribe" : "Subscribe"}
    </Button>
  );
};

export default UserAddButton;

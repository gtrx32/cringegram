import { User } from "@/types/user";
import { FC } from "react";
import s from "./UserCard.module.scss";
import UserAddButton from "@/components/UI/AddButton/UserAddButton";

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={s.userCard}>
      <h3>{user.name}</h3>
      <p>{user.username}</p>
      <p>{user.email}</p>
      <UserAddButton user={user} />
    </div>
  );
};

export default UserCard;

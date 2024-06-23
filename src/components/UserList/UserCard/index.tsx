import { User } from "@/types/user";
import { FC } from "react";
import s from "./UserCard.module.scss";
import UserAddButton from "@/components/UI/AddButton/UserAddButton";
import Link from "next/link";

interface UserCardProps {
  user: User;
}

const UserCard: FC<UserCardProps> = ({ user }) => {
  return (
    <div className={s.userCard}>
      <div className={s.userInfo}>
        <p className={s.username}>{user.username}</p>
        <Link className={s.name} href={`users/${user.id}`}>
          {user.name}
        </Link>
        <p className={s.email}>{user.email}</p>
      </div>
      <UserAddButton className={s.button} user={user} />
    </div>
  );
};

export default UserCard;

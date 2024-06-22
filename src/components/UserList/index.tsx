import { User } from "@/types/user";
import { FC } from "react";
import s from "./UserList.module.scss";
import UserCard from "./UserCard";

interface UserListProps {
  users: User[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Users</h2>
      <div className={s.list}>
        {users && users.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    </div>
  );
};

export default UserList;

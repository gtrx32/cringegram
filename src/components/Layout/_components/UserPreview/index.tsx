import { User } from "@/types/user";
import Link from "next/link";
import s from "./UserPreview.module.scss";
import { FC } from "react";
import UserAddButton from "@/components/UI/AddButton/UserAddButton";

interface UserPreviewProps {
  user: User;
}

const UserPreview: FC<UserPreviewProps> = ({ user }) => {
  return (
    <div>
      <Link key={user.id} href={`/users/${user.id}`} className={s.result_item}>
        <div>
          <p className={s.username}>{user.username}</p>
          <p className={s.name}>{user.name}</p>
        </div>
        <UserAddButton user={user} />
      </Link>
    </div>
  );
};

export default UserPreview;

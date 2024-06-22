import UserCard from "@/components/UserList/UserCard";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Subscriptions() {
  const { users } = useAppSelector((state) => state.users);

  return (
    <ul>
      {users.map((user) => (
        <UserCard user={user} />
      ))}
    </ul>
  );
}

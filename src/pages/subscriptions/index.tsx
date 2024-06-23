import UserList from "@/components/UserList";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Subscriptions() {
  const { users } = useAppSelector((state) => state.users);

  return <UserList users={users} />;
}

import { useSearchUserPostsQuery } from "@/api/postsApi";
import { useSearchUserTodosQuery } from "@/api/todosApi";
import { useSearchUserQuery } from "@/api/usersApi";
import PostList from "@/components/PostList";
import TodoList from "@/components/TodoList";
import { Post } from "@/types/post";
import { Todo } from "@/types/todo";
import { useRouter } from "next/router";
import s from "./UserPage.module.scss";
import UserAddButton from "@/components/UI/AddButton/UserAddButton";
import { User } from "@/types/user";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useSearchUserQuery(id as string);
  const {
    data: posts,
    isLoading: postsLoading,
    error: postsError,
  } = useSearchUserPostsQuery(id as string);
  const {
    data: todos,
    isLoading: todosLoading,
    error: todosError,
  } = useSearchUserTodosQuery(id as string);

  if (userLoading || postsLoading || todosLoading) {
    return <div>Loading...</div>;
  }

  if (userError || postsError || todosError) {
    return <div>Error loading data</div>;
  }

  return (
    <div className={s.wrapper}>
      <div className={s.userInfo}>
        <div className={s.userName}>
          <h1>{user && user?.name}</h1>
          <p>{user && user?.username}</p>
        </div>
        <div className={s.details}>
          <div className={s.main}>
            <h2>Main information</h2>
            <p>E-mail: {user && user?.email}</p>
            <p>Phone: {user && user?.phone}</p>
            <p>
              Address: {user?.address.city}, {user?.address.street},{" "}
              {user?.address.suite}
            </p>
          </div>
          <div className={s.company}>
            <h2>Company</h2>
            <p>Name: {user?.company.name}</p>
            <p>Catch phrase: {user?.company.catchPhrase}</p>
            <p>{user?.company.bs}</p>
          </div>
        </div>
        <UserAddButton className={s.userAdd} user={user as User} />
      </div>
      <hr />
      <PostList posts={posts as Post[]} />
      <TodoList todos={todos as Todo[]} />
    </div>
  );
};

export default UserPage;

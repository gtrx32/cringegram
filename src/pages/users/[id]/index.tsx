import { useSearchUserPostsQuery } from "@/api/postsApi";
import { useSearchUserTodosQuery } from "@/api/todosApi";
import { useSearchUserQuery } from "@/api/usersApi";
import PostList from "@/components/PostList";
import TodoList from "@/components/TodoList";
import { Post } from "@/types/post";
import { Todo } from "@/types/todo";
import { useRouter } from "next/router";
import s from "./UserPage.module.scss";

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
      <div className={s.user}>
        <h1>{user && user?.name}</h1>
        <p>Username: {user && user?.username}</p>
        <p>E-mail: {user && user?.email}</p>
        <p>Phone: {user && user?.phone}</p>
      </div>
      <hr />
      <PostList posts={posts as Post[]} />
      <hr />
      <TodoList todos={todos as Todo[]} />
    </div>
  );
};

export default UserPage;

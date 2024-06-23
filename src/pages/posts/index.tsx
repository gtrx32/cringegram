import PostList from "@/components/PostList";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Posts() {
  const { posts } = useAppSelector((state) => state.posts);

  return <PostList posts={posts} />;
}

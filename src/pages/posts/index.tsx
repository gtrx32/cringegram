import PostCard from "@/components/PostList/PostCard";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Posts() {
  const { posts } = useAppSelector((state) => state.posts);

  return (
    <ul>
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </ul>
  );
}

import { Post } from "@/types/post";
import { FC } from "react";
import PostCard from "./PostCard";
import s from "./PostList.module.scss";

interface PostListProps {
  posts: Post[];
}

const PostList: FC<PostListProps> = ({ posts }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Posts</h2>
      <div className={s.list}>
        {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostList;

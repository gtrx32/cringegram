import { Post } from "@/types/post";
import { FC } from "react";
import s from "./PostCard.module.scss";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className={s.postCard}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;

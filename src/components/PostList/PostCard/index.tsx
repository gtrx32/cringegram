import { Post } from "@/types/post";
import { FC } from "react";
import s from "./PostCard.module.scss";
import PostAddButton from "@/components/UI/AddButton/PostAddButton";

interface PostCardProps {
  post: Post;
}

const PostCard: FC<PostCardProps> = ({ post }) => {
  return (
    <div className={s.postCard}>
      <div className={s.postInfo}>
        <h3 className={s.title}>{post.title}</h3>
        <p className={s.body}>{post.body}</p>
      </div>
      <PostAddButton className={s.button} post={post} />
    </div>
  );
};

export default PostCard;

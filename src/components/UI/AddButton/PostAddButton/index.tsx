import { useActions } from "@/hooks/useActions";
import { useAppSelector } from "@/hooks/useAppSelector";
import clsx from "clsx";
import { ComponentPropsWithRef, FC } from "react";
import Button from "../../Button";
import s from "../AddButton.module.scss";
import { Post } from "@/types/post";

interface PostAddButtonProps extends ComponentPropsWithRef<"button"> {
  post: Post;
}

const PostAddButton: FC<PostAddButtonProps> = ({
  className,
  post,
  ...props
}) => {
  const { posts } = useAppSelector((state) => state.posts);
  const { addPost, removePost } = useActions();

  const isExists = posts.some((el) => el.id === post.id);

  const addHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    post: Post
  ) => {
    event.preventDefault();
    addPost(post);
  };

  const removeHandler = (
    event: React.MouseEvent<HTMLButtonElement>,
    post: Post
  ) => {
    event.preventDefault();
    removePost(post);
  };

  return (
    <Button
      className={clsx(className, isExists ? s.removeButton : s.addButton)}
      onClick={
        isExists
          ? (event) => removeHandler(event, post)
          : (event) => addHandler(event, post)
      }
      {...props}
    >
      {isExists ? "Remove" : "Add"}
    </Button>
  );
};

export default PostAddButton;

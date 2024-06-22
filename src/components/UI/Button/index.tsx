import { ComponentPropsWithRef, FC } from "react";
import s from "./Button.module.scss";
import clsx from "clsx";

const Button: FC<ComponentPropsWithRef<"button">> = ({
  onClick,
  className,
  children,
  ...props
}) => {
  return (
    <button className={clsx(s.button, className)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

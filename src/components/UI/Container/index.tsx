import s from "./Container.module.scss";
import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<ContainerProps> = ({ className, children }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};

export default Container;

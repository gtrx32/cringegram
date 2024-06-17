import s from "./Container.module.scss";
import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

interface IContainerProps extends PropsWithChildren {
  className?: string;
}

const Container: FC<IContainerProps> = ({ className, children }) => {
  return <div className={clsx(s.container, className)}>{children}</div>;
};

export default Container;

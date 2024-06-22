import s from "./Main.module.scss";
import { FC, PropsWithChildren } from "react";
import Link from "next/link";
import Container from "@/components/UI/Container";

const Main: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.main_wrapper}>
      <Container>
        <main className={s.main}>
          <nav className={s.nav}>
            <Link href="/subscriptions">Subscriptions</Link>
            <Link href="/posts">Posts</Link>
            <Link href="/todos">Todos</Link>
          </nav>
          <div className={s.content}>{children}</div>
        </main>
      </Container>
    </div>
  );
};

export default Main;

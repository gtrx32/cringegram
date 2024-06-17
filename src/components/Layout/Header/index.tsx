import Container from "@/components/Container";
import s from "./Header.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <Container>
        <header className={s.header}>
          <h1 className={s.title}>
            <Link href="/">CringeGram</Link>
          </h1>
          <input
            placeholder="Поиск людей по имени"
            className={s.search}
            type="text"
          />
        </header>
      </Container>
    </div>
  );
};

export default Header;

import Container from "@/components/UI/Container";
import s from "./Header.module.scss";
import Link from "next/link";
import SearchBlock from "../_components/SearchBlock";

const Header = () => {
  return (
    <div className={s.header_wrapper}>
      <Container>
        <header className={s.header}>
          <h1 className={s.title}>
            <Link href="/">CringeGram</Link>
          </h1>
          <SearchBlock />
        </header>
      </Container>
    </div>
  );
};

export default Header;

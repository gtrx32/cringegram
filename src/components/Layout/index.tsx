import { FC, PropsWithChildren } from "react";
import s from "./Layout.module.scss";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
};

export default Layout;

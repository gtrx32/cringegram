import Container from "@/components/Container";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer_wrapper}>
      <Container>
        <footer className={s.footer}>
          <p>&copy; 2024 Cringegram</p>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;

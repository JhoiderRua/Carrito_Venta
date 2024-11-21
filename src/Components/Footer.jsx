//Style Module
import footerModule from "./Footer.module.css";
//Font-Awesome
export const Footer = () => {
  return (
    <footer className={footerModule.footer}>
      <p className={footerModule.p}>
        @ | Todos los derechos reservados a Jhoider Rua
      </p>
    </footer>
  );
};

export default Footer;

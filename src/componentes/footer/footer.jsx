import { Children } from "react";
import styles from "../footer/footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import SocialLinks from "../socialLinks/socialLinks";

const Footer = ({ children, link }) => {
  return (
    <footer>
      <ul>
        <li>
          <a href="">Conta</a>
        </li>
        <li>
          <a href="">Carreiras</a>
        </li>
        <li>
          <a href="">Informações corporativas</a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">Termos de uso</a>
        </li>
        <li>
          <a href="">Influência</a>
        </li>
        <li>
          <a href="">Audio</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="">Central de ajuda</a>
        </li>
        <li>
          <a href="">Privacidade</a>
        </li>
        <li>
          <a href="">Avisos legais</a>
        </li>
      </ul>

      <div className={styles.pipigrandao}>
        <p>
          Feito com <ion-icon name="heart" /> por{" "}
          <a href={link} target="_blank">
            {children}
          </a>
        </p>
        <SocialLinks
          icon={"logo-github"}
          href={"https://github.com/Fe-Corazza"}
        />
        <SocialLinks
          icon={"logo-instagram"}
          href={"https://www.instagram.com/fe_corazza/"}
        />
        <SocialLinks
          icon={"logo-twitter"}
          href={"https://twitter.com/fe_corazza"}
        />
        <SocialLinks
          icon={"logo-tiktok"}
          href={"https://www.tiktok.com/@fe_corazza"}
        />
        <SocialLinks icon={"logo-linkedin"} href={"#"} />
      </div>
    </footer>
  );
};

export default Footer;

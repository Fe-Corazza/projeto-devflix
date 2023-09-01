import { Children } from "react";
import "../footer/footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
import SocialLinks from "../socialLinks/socialLinks";

const Footer = ({ children, link }) => {
  return (
    <div>
      <footer>
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
  </footer>
  <footer>
        <div className="boxs">
          <ul>
            <li>
              <a href="#">Conta</a>
            </li>
            <li>
              <a href="#">Carreiras</a>
            </li>
            <li>
              <a href="#">Informação Corporavita</a>
            </li>
          </ul>
        </div>
        <div className="boxs">
          <ul>
            <li>
              <a href="#">Termos de Uso</a>
            </li>
            <li>
              <a href="#">Influência</a>
            </li>
            <li>
              <a href="#">Audio</a>
            </li>
          </ul>
        </div>
        <div className="boxs">
          <ul>
            <li>
              <a href="#">Central de ajuda</a>
            </li>
            <li>
              <a href="#">Privacidade</a>
            </li>
            <li>
              <a href="#">Aviso Legais</a>
            </li>
          </ul>
        </div>
        <div className="boxs"></div>
      </footer>
    </div>
  );
};

export default Footer;

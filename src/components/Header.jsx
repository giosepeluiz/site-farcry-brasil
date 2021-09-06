import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../../public/images/community-logo.svg";

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <a target="_blank" href="https://www.facebook.com/groups/farcrybrasil" rel="noreferrer">
        <Image src={logo} width="200" height="50" alt="Logo Comunidade Far Cry Brasil" />
      </a>
    </div>

    <div className={styles.buy} aria-hidden="true">
      <span>
        <a
          target="_blank"
          href="https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6/buy"
          rel="noreferrer">
          Pré-venda
        </a>
      </span>
      <span>
        <a
          target="_blank"
          href="https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6/buy"
          rel="noreferrer">
          disponível
        </a>
      </span>
    </div>
  </header>
);

export default Header;

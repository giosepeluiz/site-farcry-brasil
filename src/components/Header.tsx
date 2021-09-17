import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "../styles/Header.module.scss";

import logo from "../../public/images/community-logo.svg";
import menuOpen from "../../public/images/menu-bars.svg";
import menuClose from "../../public/images/menu-close.svg";

// Abre um link em uma nova janela
import gotoUrl from "../functions/headerFunctions";

const Header = () => {
  const [menu, setMenu] = useState();

  const isClosed = (value) => {
    switch (value) {
      case true:
        return styles.open;
      case false:
        return styles.close;
      default:
        return "";
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a target="_blank" href="https://www.facebook.com/groups/farcrybrasil" rel="noreferrer">
          <Image src={logo} width="200" height="50" alt="Logo Comunidade Far Cry Brasil" />
        </a>
      </div>

      {!menu && (
        <div className={styles["menu-button"]}>
          <Image
            src={menuOpen}
            alt="Abrir Menu"
            width="30"
            height="30"
            onClick={() => setMenu(!menu)}
          />
        </div>
      )}

      <div className={`${styles.menu} ${isClosed(menu)}`}>
        {menu && (
          <div className={styles["menu-button"]}>
            <Image
              src={menuClose}
              alt="Fechar Menu"
              width="30"
              height="30"
              onClick={() => setMenu(!menu)}
            />
          </div>
        )}
        <ul>
          <Link passHref href="/">
            <li>Início</li>
          </Link>
          <Link passHref href="/musicas">
            <li>Trilhas Sonoras</li>
          </Link>
          <li
            onClick={() => gotoUrl("https://www.facebook.com/groups/farcrybrasil")}
            aria-hidden="true">
            Comunidade
          </li>
          <li
            onClick={() => gotoUrl("https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6")}
            aria-hidden="true">
            Site Oficial
          </li>
        </ul>
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
};

export default Header;

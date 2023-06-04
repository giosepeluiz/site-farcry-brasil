"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { StylesType } from "@/models/Interfaces";

const Menu = ({ styles }: { styles: StylesType }) => {
  const [menu, setMenu] = useState<boolean>();

  const isClosed = (value: any) => {
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
    <>
      <div className={styles.logo}>
        <a target="_blank" href="https://www.facebook.com/groups/farcrybrasil" rel="noreferrer">
          <Image
            src="/images/community-logo.svg"
            width="200"
            height="50"
            alt="Logo Comunidade Far Cry Brasil"
          />
        </a>
      </div>

      {!menu && (
        <div className={styles["menu-button"]}>
          <Image
            src="/images/menu-bars.svg"
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
              src="/images/menu-close.svg"
              alt="Fechar Menu"
              width="30"
              height="30"
              onClick={() => setMenu(!menu)}
            />
          </div>
        )}
        <ul>
          <li>
            <Link passHref href="/" className={styles["menu-link"]}>
              Início
            </Link>
          </li>
          <li>
            <Link passHref href="/musicas" className={styles["menu-link"]}>
              Trilhas Sonoras
            </Link>
          </li>
          <li>
            <Link
              className={styles["menu-link"]}
              passHref
              href="https://www.facebook.com/groups/farcrybrasil"
              aria-hidden="true"
              target="_blank">
              Comunidade
            </Link>
          </li>
          <li>
            <Link
              className={styles["menu-link"]}
              passHref
              href="https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6"
              aria-hidden="true"
              target="_blank">
              Site Oficial
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.buy} aria-hidden="true">
        <span>
          <Link
            target="_blank"
            href="https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6/buy"
            rel="noreferrer">
            Adquira Far Cry 6
          </Link>
        </span>
        <span>
          <Link
            target="_blank"
            href="https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6/buy"
            rel="noreferrer">
            Clicando aqui
          </Link>
        </span>
      </div>
    </>
  );
};

export default Menu;

"use client";

// Importando a função gotoUrl do diretório functions/
import gotoUrl from "@/functions/gotoUrl";

// Importando o hook useWindowDimensions do diretório functions/
import useWindowDimensions from "@/functions/useWindowWidth";

// Importando os estilos específicos para o componente Menu do módulo Menu.module.scss
import styles from "@/styles/(home)/Menu.module.scss";

// Importando ícones da biblioteca Heroicons
import { Bars4Icon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid";

// Importando o componente Image do pacote next/image
import Image from "next/image";

// Importando o componente Link do Next.js
import Link from "next/link";

// Importando o hook useState do React
import { useState } from "react";

// Componente funcional Menu, responsável por renderizar a barra de navegação
const Menu = () => {
  // Estado para ativar ou desativar o menu
  const [enableMenu, setEnableMenu] = useState<boolean>(false);

  // Obtendo as dimensões da janela usando o hook useWindowDimensions
  const { windowWidth } = useWindowDimensions();

  // Função que define a classe do menu com base no estado
  const isClosed = (value: boolean) => {
    switch (value) {
      case true:
        return styles.menubar__items__open;
      case false:
        return styles.menubar__items__close;
      default:
        return "";
    }
  };

  return (
    // Elemento de navegação com a classe definida nos estilos
    <nav className={styles.menubar}>
      {/* Logo do menu */}
      <div className={styles.menubar__logo}>
        {/* Link para a página inicial */}
        <Link href={"/"}>
          {/* Imagem do logo com um link */}
          <Image src={"/images/community-logo.svg"} width={180} height={60} alt="Logo" />
        </Link>
      </div>

      {/* Itens do menu */}
      <div
        className={`${styles.menubar__items} ${
          // Adiciona a classe de abertura ou fechamento do menu com base na largura da janela
          windowWidth && windowWidth < 1200 ? isClosed(enableMenu) : ""
        }`}
        // Fecha o menu ao clicar em um item
        onClick={() => setEnableMenu(false)}>
        {/* Lista de itens do menu */}
        <ul className={styles.menubar__items__list}>
          {/* Item de navegação para a página inicial */}
          <li onClick={() => gotoUrl("/", false)} aria-hidden="true">
            Início
          </li>
          {/* Item de navegação para a página de trilha sonora */}
          <li onClick={() => gotoUrl("/musicas", false)} aria-hidden="true">
            Trilha Sonora
          </li>
          {/* Item de navegação para a comunidade no Facebook */}
          <li
            onClick={() => gotoUrl("https://www.facebook.com/groups/farcrybrasil")}
            aria-hidden="true">
            Comunidade
          </li>
          {/* Item de navegação para o site oficial do Far Cry 6 */}
          <li
            onClick={() => gotoUrl("https://www.ubisoft.com/pt-br/game/far-cry/far-cry-6")}
            aria-hidden="true">
            Site Oficial
          </li>
        </ul>
      </div>

      {/* Ícone de sanduíche para ativar/desativar o menu em telas menores */}
      <div className={`${styles.menubar__sandwich}`}>
        {/* Ícone de barras quando o menu está desativado */}
        {!enableMenu && (
          <Bars4Icon
            className={`${styles.menubar__sandwich__icon} ${styles.menubar__items__open}`}
            onClick={() => setEnableMenu(!enableMenu)}
          />
        )}
        {/* Ícone de seta para a direita quando o menu está ativado */}
        {enableMenu && (
          <ArrowRightOnRectangleIcon
            className={`${styles.menubar__sandwich__icon} ${styles.menubar__items__open}`}
            onClick={() => setEnableMenu(!enableMenu)}
          />
        )}
      </div>
    </nav>
  );
};

// Exporta o componente Menu para ser utilizado em outros lugares
export default Menu;

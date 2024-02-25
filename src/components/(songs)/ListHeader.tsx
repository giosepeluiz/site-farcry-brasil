// Importando o componente Image do pacote next/image
import Image from "next/image";

// Importando os estilos específicos para o componente GameListHeader do módulo ListHeader.module.scss
import styles from "@/styles/(songs)/ListHeader.module.scss";

// Importando o tipo GameListHeader da interface Song.interface
import type { GameListHeader } from "@/interfaces/Song.interface";

// Importando a lista de jogos do arquivo data_games.js
import { gamelist } from "@/data/data_games";

// Componente funcional GameListHeader, responsável por renderizar o cabeçalho dinâmico com o nome do jogo
const GameListHeader = (props: GameListHeader) => {
  // Destructuring da propriedade game de props
  const { game } = props || null;

  // Filtra o jogo selecionado com base no SLUG
  const selectedGame = gamelist.filter((item) => item.uid === game);

  // Define o background borado (blur) com a imagem do jogo selecionado
  selectedGame[0] &&
    document.documentElement.style.setProperty(
      "--blur-background",
      `url(/images/assets/screens/bg-${selectedGame[0].cover}.jpg)`,
    );

  return (
    // Elemento contendo a classe definida nos estilos
    <div className={styles.wrapper}>
      {/* Verifica se o jogo está definido ou não */}
      {!game ? (
        // Se não houver um jogo selecionado, exibe um título genérico
        <span className={styles["title-big"]}>
          Trilhas Sonoras e<br />
          Músicas Licenciadas
        </span>
      ) : (
        // Se houver um jogo selecionado, exibe o cabeçalho com o nome do jogo e a imagem
        <div className={styles.image}>
          {/* Título do cabeçalho */}
          <span className={styles.title}>Trilhas Sonoras e Músicas Licenciadas</span>

          {/* Imagem do logo do jogo com efeito de desfoque (blur) */}
          <Image
            src={`/images/logos/logo-${selectedGame[0].cover}-alt.png`}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: "100%", maxWidth: "640px", height: "auto" }}
            alt="Músicas Licenciadas e Trilhas Sonoras"
            placeholder="blur"
            blurDataURL={`/images/logo-${game}.png`}
          />
        </div>
      )}
    </div>
  );
};

// Exporta o componente GameListHeader para ser utilizado em outros lugares
export default GameListHeader;

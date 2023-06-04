import Image from "next/image";
import styles from "@/styles/GameListHeader.module.scss";

import { GameListHeader } from "@/models/Interfaces";

// Cabeçalho dinâmico com o nome do jogo
const GameListHeader = (props: GameListHeader) => {
  const { game } = props || null;
  return (
    <div className={styles.wrapper}>
      {!game ? (
        <span className={styles["title-big"]}>
          Trilhas Sonoras e<br />
          Músicas Licenciadas
        </span>
      ) : (
        <div className={styles.image}>
          <span className={styles.title}>Trilhas Sonoras e Músicas Licenciadas</span>
          <Image
            src={`/images/logo-${game}.png`}
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

export default GameListHeader;

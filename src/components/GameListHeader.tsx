import Image from "next/image";
import styles from "@/styles/GameListHeader.module.scss";

// Cabeçalho dinâmico com o nome do jogo
const GameListHeader = (props) => {
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
            objectFit="contain"
            width="600"
            height="200"
            alt="Músicas Licenciadas e Trilhas Sonoras"
          />
        </div>
      )}
    </div>
  );
};

export default GameListHeader;

import Image from "next/image";
import styles from "../styles/ListHeader.module.scss";

const ListHeader = (props) => {
  const { gameId } = props || null;
  return (
    <div className={styles.wrapper}>
      {!gameId ? (
        <span className={styles["title-big"]}>
          Trilhas Sonoras e<br />
          Músicas Licenciadas
        </span>
      ) : (
        <div className={styles.image}>
          <span className={styles.title}>Trilhas Sonoras e Músicas Licenciadas</span>
          <Image
            src={`/images/logo-${gameId}.png`}
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

export default ListHeader;

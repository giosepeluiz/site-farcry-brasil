import Image from "next/image";
import styles from "../styles/Song.module.scss";

// Função para abrir um link em uma nova guia
const gotoUrl = (url) => window.open(url, "_blank");

const Song = (props) => {
  const { song } = props;
  return (
    <div className={styles.icons}>
      {song.map((item: any) => (
        <div className={styles.streaming} key={item.type.toLowerCase()}>
          <Image
            src={`/images/icon-${item.type.toLowerCase()}.svg`}
            width="50"
            height="50"
            alt={`Escute no ${item.type}`}
            title={`Escute no ${item.type}`}
            onClick={() => gotoUrl(item.url)}
          />
          <p>{item.type}</p>
        </div>
      ))}
    </div>
  );
};

export default Song;

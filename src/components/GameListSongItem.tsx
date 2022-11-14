import Image from "next/image";

// Função para abrir um link em uma nova guia
const gotoUrl = (url) => window.open(url, "_blank");

const GameListSongItem = (props) => {
  const { styles, size, streamingName, url } = props;

  return (
    <div className={styles} key={streamingName.toLowerCase()}>
      <Image
        src={`/../images/icon-${streamingName.toLowerCase()}.svg`}
        width={size}
        height={size}
        alt={`Escute no ${streamingName}`}
        title={`Escute no ${streamingName}`}
        onClick={() => gotoUrl(url)}
      />
      <p>{streamingName}</p>
    </div>
  );
};

export default GameListSongItem;

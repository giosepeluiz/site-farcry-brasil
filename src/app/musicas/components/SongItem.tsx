import Image from "next/image";
import { Props } from "@/models/Interfaces";

// Função para abrir um link em uma nova guia
const gotoUrl = (url: string) => window.open(url, "_blank");

const SongItem = (props: Props) => {
  const { styles, size, streamingName, url } = props;

  return (
    <div className={styles} key={streamingName.toLowerCase()}>
      <Image
        src={`../images/icon-${streamingName.toLowerCase()}.svg`}
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

export default SongItem;

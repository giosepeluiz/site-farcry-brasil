// Importando o tipo SongItemProps da interface Song.interface
import { SongItemProps } from "@/interfaces/Song.interface";

// Importando o componente Image do Next.js
import Image from "next/image";

// Função para abrir um link em uma nova guia
const gotoUrl = (url: string) => window.open(url, "_blank");

// Componente funcional SongItem, responsável por renderizar um ícone de site de streaming
const SongItem = (props: SongItemProps) => {
  // Destructuring das propriedades styles, size, streamingName e url de props
  const { styles, size, streamingName, url } = props;

  // Retorna um elemento contendo o ícone do site de streaming e seu nome
  return (
    <div className={styles} key={streamingName.toLowerCase()}>
      {/* Ícone do site de streaming */}
      <Image
        src={`../../svg/icon-${streamingName.toLowerCase()}.svg`}
        width={Number(size)}
        height={Number(size)}
        alt={`Escute no ${streamingName}`}
        title={`Escute no ${streamingName}`}
        // Ao clicar no ícone, abre o link do site de streaming em uma nova guia
        onClick={() => gotoUrl(url)}
      />
      {/* Nome do site de streaming */}
      <p>{streamingName}</p>
    </div>
  );
};

// Exporta o componente SongItem para ser utilizado em outros lugares
export default SongItem;

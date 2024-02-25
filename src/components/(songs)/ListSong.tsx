// Importando os estilos específicos para o componente GameListSong do módulo ListSong.module.scss
import styles from "@/styles/(songs)/ListSong.module.scss";

// Importando o componente SongItem do arquivo SongItem.tsx
import SongItem from "./SongItem";

// Importando o tipo GameListSong da interface Song.interface
import type { GameListSong } from "@/interfaces/Song.interface";

// Componente funcional GameListSong, responsável por renderizar os ícones dos sites de streaming
const GameListSong = (props: GameListSong) => {
  // Destructuring da propriedade song de props
  const { song } = props;
  // Obtém a primeira música do array
  const selectedSong: any = song[0];

  // Retorna os elementos que inserem os ícones dos sites de streaming
  return (
    // Container para os ícones dos sites de streaming
    <div className={styles.icons}>
      <>
        {/* Verifica se há link do Spotify e renderiza o ícone correspondente */}
        {selectedSong.spotify && (
          <SongItem
            styles={styles.streaming}
            size="50"
            streamingName="Spotify"
            url={selectedSong.spotify}
          />
        )}
        {/* Verifica se há link do Deezer e renderiza o ícone correspondente */}
        {selectedSong.deezer && (
          <SongItem
            styles={styles.streaming}
            size="50"
            streamingName="Deezer"
            url={selectedSong.deezer}
          />
        )}
        {/* Verifica se há link do YouTube e renderiza o ícone correspondente */}
        {selectedSong.youtube && (
          <SongItem
            styles={styles.streaming}
            size="50"
            streamingName="YouTube"
            url={selectedSong.youtube}
          />
        )}
      </>
    </div>
  );
};

// Exporta o componente GameListSong para ser utilizado em outros lugares
export default GameListSong;

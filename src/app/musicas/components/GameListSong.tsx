import styles from "@/styles/GameListSong.module.scss";
import SongItem from "./SongItem";
import { GameListSong } from "@/models/Interfaces";

const GameListSong = (props: GameListSong) => {
  // Puxa as músicas e a ID da música selecionada para cá
  const { song } = props;
  const selectedSong: any = song[0];

  // Retorna os elementos que inserem os ícones dos sites de streaming
  return (
    <div className={styles.icons}>
      <>
        {selectedSong.spotify && (
          <SongItem
            styles={styles.streaming}
            size="50"
            streamingName="Spotify"
            url={selectedSong.spotify}
          />
        )}
        {selectedSong.deezer && (
          <SongItem
            styles={styles.streaming}
            size="50"
            streamingName="Deezer"
            url={selectedSong.deezer}
          />
        )}
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

export default GameListSong;

import styles from "@/styles/GameListSong.module.scss";
import GameListSongItem from "@/components/GameListSongItem";

const GameListSong = (props) => {
  // Puxa as músicas e a ID da música selecionada para cá
  const { song, playlist } = props;

  // Filtra os atributos da música selecionada baseado na ID
  const filteredPlaylist = playlist.filter((el) => el.id === song);

  // Retorna os elementos que inserem os ícones dos sites de streaming
  return (
    <div className={styles.icons}>
      {filteredPlaylist.map((item: any) => (
        <>
          {item.spotify && (
            <GameListSongItem
              styles={styles.streaming}
              size="50"
              streamingName="Spotify"
              url={item.spotify}
            />
          )}
          {item.deezer && (
            <GameListSongItem
              styles={styles.streaming}
              size="50"
              streamingName="Deezer"
              url={item.deezer}
            />
          )}
          {item.youtube && (
            <GameListSongItem
              styles={styles.streaming}
              size="50"
              streamingName="YouTube"
              url={item.youtube}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default GameListSong;

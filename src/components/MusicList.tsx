import { useRouter } from "next/router";
import styles from "../styles/MusicList.module.scss";
import Song from "./Song";

// Função que transforma uma frase em estilo url amigável
import { toFriendlyText } from "../functions/playlistFunctions";

const MusicList = (props) => {
  const router = useRouter();
  const { songs, gameId, songsLength } = props;

  // Caso a rota retorne UNDEFINED, isso é ignorado
  if (typeof router.query.id === "undefined") {
    return null;
  }

  // Caso retorne algo, será atribuído à constante ID
  const musicId = router.query.id[1];

  const isSong = () => {
    if (+musicId > 0 && +musicId <= songsLength) {
      return true;
    }
    return false;
  };

  const handleClick = (e) => {
    const { value } = e.target;
    e.preventDefault();
    router.push(`/musicas/${gameId}/${value}`);
  };

  return (
    <>
      <select
        value={isSong() ? musicId : "default"}
        className={styles.select}
        onChange={(e) => handleClick(e)}>
        <option value="default" disabled>
          Selecione o que quer ouvir
        </option>
        {songs.map((map, index) => (
          <option key={toFriendlyText(map.name)} value={index + 1}>
            {map.name}
          </option>
        ))}
      </select>

      {isSong() && <Song song={songs[+musicId - 1].options} />}
    </>
  );
};
export default MusicList;

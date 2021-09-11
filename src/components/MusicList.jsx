import { useRouter } from "next/router";
import styles from "../styles/MusicList.module.scss";
import Song from "./Song";

const toFriendlyText = (url) =>
  url
    .toString() // Convert to string
    .normalize("NFD") // Change diacritics
    .replace(/[\u0300-\u036f]/g, "") // Remove illegal characters
    .replace(/\s+/g, "-") // Change whitespace to dashes
    .toLowerCase() // Change to lowercase
    .replace(/&/g, "-and-") // Replace ampersand
    .replace(/[^a-z0-9-]/g, "") // Remove anything that is not a letter, number or dash
    .replace(/-+/g, "-") // Remove duplicate dashes
    .replace(/^-*/, "") // Remove starting dashes
    .replace(/-*$/, ""); // Remove trailing dashes

const MusicList = (props) => {
  const router = useRouter();
  const { songs, gameId } = props;

  // Caso a rota retorne UNDEFINED, isso é ignorado
  if (typeof router.query.id === "undefined") {
    return null;
  }

  // Caso retorne algo, será atribuído à constante ID
  const musicId = router.query.id[1];

  const handleClick = (e) => {
    const { value } = e.target;
    e.preventDefault();
    router.push(`/musicas/${gameId}/${value}`);
  };

  return (
    <>
      <select
        value={musicId || "default"}
        className={styles.select}
        onChange={(e) => handleClick(e)}>
        <option value="default" disabled>
          Selecione o que quer ouvir
        </option>
        {songs.map((map, index) => (
          <option key={toFriendlyText(map.name)} value={index}>
            {map.name}
          </option>
        ))}
      </select>

      {musicId && <Song song={songs[musicId].options} />}
    </>
  );
};

export default MusicList;

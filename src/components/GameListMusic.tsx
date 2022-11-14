import GameListSong from "@/components/GameListSong";

import styles from "@/styles/GameListMusic.module.scss";
import { useState } from "react";

const GameListMusic = (props) => {
  // Puxa todas as músicas em "props"
  const { songs } = props;

  // Quando uma música for selecionada, ela será atribuída ao estado "selectedSong"
  const [selectedSong, setSelectedSong] = useState(null);

  // Função que atribui a ação ao elemento "select"
  const handleClick = (e) => {
    const { value } = e.target;
    e.preventDefault();
    setSelectedSong(value);
  };

  // Retorna a lista de músicas de um determinado jogo
  return (
    <>
      <select
        defaultValue={selectedSong || "default"}
        className={styles.select}
        onChange={(e) => handleClick(e)}>
        <option value="default">Selecione o que quer ouvir</option>
        {songs.map((el) => (
          <option key={el.id} value={el.id}>
            {el.gamePlaylist}
          </option>
        ))}
      </select>
      {selectedSong && <GameListSong song={selectedSong} playlist={songs} />}
    </>
  );
};

export default GameListMusic;

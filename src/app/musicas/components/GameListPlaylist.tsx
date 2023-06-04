"use client";

import GameListSong from "./GameListSong";
import { Props } from "@/models/Interfaces";

import styles from "@/styles/GameListPlaylist.module.scss";
import { useState } from "react";

const GameListPlaylist = (props: Props) => {
  // Puxa todas as músicas em "props"
  const { songs } = props;

  // Quando uma música for selecionada, ela será atribuída ao estado "selectedSong"
  const [selectedSong, setSelectedSong] = useState(null);

  // Função que atribui a ação ao elemento "select"
  const handleClick = (e: any) => {
    const { value } = e.target;
    setSelectedSong(songs.filter((e: any) => e.id === value));
    e.preventDefault();
  };

  // Retorna a lista de músicas de um determinado jogo
  return (
    <>
      <select
        defaultValue={selectedSong || "default"}
        className={styles.select}
        onChange={(e) => handleClick(e)}>
        <option value="default">Selecione o que quer ouvir</option>
        {songs.map((el: any) => (
          <option key={el.id} value={el.id}>
            {el.gamePlaylist}
          </option>
        ))}
      </select>

      {selectedSong && <GameListSong song={selectedSong} />}
    </>
  );
};

export default GameListPlaylist;

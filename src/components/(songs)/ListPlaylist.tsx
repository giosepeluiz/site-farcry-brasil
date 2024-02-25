"use client";

// Importando o componente GameListSong do arquivo ListSong.tsx
import GameListSong from "./ListSong";

// Importando o tipo GameListPlaylist da interface Song.interface
import type { GameListPlaylist } from "@/interfaces/Song.interface";

// Importando os estilos específicos para o componente GameListPlaylist do módulo ListPlaylist.module.scss
import styles from "@/styles/(songs)/ListPlaylist.module.scss";

// Importando o hook useState do React
import { useState } from "react";

// Componente funcional GameListPlaylist, responsável por renderizar uma lista de playlists de um jogo
const GameListPlaylist = (props: GameListPlaylist) => {
  // Destructuring da propriedade songs de props
  const { songs } = props;

  // Estado para armazenar a música selecionada
  const [selectedSong, setSelectedSong] = useState<null | any>(null);

  // Função que é chamada quando uma música é selecionada
  const handleClick = (e: any) => {
    const { value } = e.target;
    // Filtra a música selecionada e atualiza o estado
    setSelectedSong(songs.filter((e: any) => e.id === value));
    e.preventDefault();
  };

  // Retorna a lista de playlists de um determinado jogo
  return (
    <>
      {/* Dropdown (select) para escolher a playlist */}
      <select
        defaultValue={selectedSong || "default"}
        className={styles.select}
        onChange={(e) => handleClick(e)}>
        {/* Opção padrão */}
        <option value="default">Selecione o que quer ouvir</option>
        {/* Mapeia as músicas para opções no dropdown */}
        {songs.map((el: any) => (
          <option key={el.id} value={el.id}>
            {el.gamePlaylist}
          </option>
        ))}
      </select>

      {/* Renderiza o componente GameListSong se uma música estiver selecionada */}
      {selectedSong && <GameListSong song={selectedSong} />}
    </>
  );
};

// Exporta o componente GameListPlaylist para ser utilizado em outros lugares
export default GameListPlaylist;

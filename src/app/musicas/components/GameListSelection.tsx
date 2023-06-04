"use client";

import styles from "@/styles/GameListSelection.module.scss";

import GameListPlaylist from "./GameListPlaylist";

import { ListGame, GameListSelection } from "@/models/Interfaces";
import { useRouterFn } from "@/functions/useRouterFn";

const listGame: ListGame = require("@/data/fcgames.json");
const listSongs = require("@/data/fcsongs.json");

const GameListSelection = (props: GameListSelection) => {
  const { game } = props || null;
  const { handleClick } = useRouterFn();

  // Retorna a lista de jogos da franquia
  return (
    <>
      <select
        value={game || "default"}
        className={styles.select}
        onChange={(e: any) => handleClick(e)}>
        <option value="default" disabled>
          Selecione um jogo da franquia
        </option>
        {listGame.map(
          (map: ListGame) =>
            map.hasSongs && (
              <option key={map.id} value={map.id}>
                {map.title}
              </option>
            ),
        )}
      </select>

      {game && (
        <GameListPlaylist
          songs={listSongs.filter((e: any) => e.gameId === game)}
          singleGame={game}
        />
      )}
    </>
  );
};

export default GameListSelection;

// Importando os estilos específicos para o componente GameListSelection do módulo ListSelection.module.scss
import styles from "@/styles/(songs)/ListSelection.module.scss";

// Importando o componente GameListPlaylist do arquivo ListPlaylist.tsx
import GameListPlaylist from "./ListPlaylist";

// Importando o tipo GameListSelection da interface Song.interface
import type { GameListSelection } from "@/interfaces/Song.interface";

// Importando o tipo GameProps da interface Gamelist.interface
import { GameProps } from "@/interfaces/Gamelist.interface";

// Importando a função useRouterFn do arquivo useRouterFn.ts
import { useRouterFn } from "@/functions/useRouterFn";

// Importando a lista de músicas do arquivo data_songs.js
import { songs as listSongs } from "@/data/data_songs";

// Importa os jogos que tem trilha sonora do arquivo data_games.js
import { gamelist } from "@/data/data_games";

// Filtra os jogos que têm trilha sonora
const listGames = gamelist.filter((item) => item.hasSongs ?? null);

// Componente funcional GameListSelection, responsável por renderizar a seleção de jogos da franquia
const GameListSelection = (props: GameListSelection) => {
  // Destructuring da propriedade game de props
  const { game } = props || null;

  // Destructuring do método handleClick da função useRouterFn
  const { handleClick } = useRouterFn();

  // Retorna a lista de jogos da franquia
  return (
    <>
      {/* Dropdown (select) para escolher um jogo da franquia */}
      <select
        value={game || "default"}
        className={styles.select}
        onChange={(e: any) => handleClick(e)}>
        {/* Opção padrão desabilitada */}
        <option value="default" disabled>
          Selecione um jogo da franquia
        </option>
        {/* Mapeia os jogos que têm trilha sonora para opções no dropdown */}
        {listGames.map(
          (map: GameProps) =>
            map.hasSongs && (
              <option key={map.id} value={map.uid}>
                {map.title}
              </option>
            ),
        )}
      </select>

      {/* Renderiza o componente GameListPlaylist se um jogo da franquia estiver selecionado */}
      {game && (
        <GameListPlaylist
          songs={listSongs.filter((item) => item.gameId === game)}
          singleGame={game}
        />
      )}
    </>
  );
};

// Exporta o componente GameListSelection para ser utilizado em outros lugares
export default GameListSelection;

import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import data from "../data/data.json";
import styles from "../styles/GameList.module.scss";
import MusicList from "./MusicList";

const GameList = (props) => {
  // Recebendo a informação da ID do jogo do componente principal
  const { gameId } = props;

  // Gera a URL com a rota: /musicas/jogo
  const router = useRouter();
  const handleClick = (e) => {
    const { value } = e.target;
    e.preventDefault();
    router.push(`/musicas/${value}`);
  };

  // pega a lista de músicas do jogo em "gameId"
  const [game] = data.filter((info) => info.id === gameId);

  return (
    <>
      <NextSeo
        title={`Comunidade Oficial de Far Cry | Trilha Sonora${game ? ` | ${game.game}` : ""}`}
        description={`Comunidade Oficial de Far Cry | Trilha Sonora${
          game ? ` | ${game.game}` : ""
        }`}
        openGraph={{
          type: "website",
          url: `https://farcry.arqueirover.de/musicas/${game ? `${game.id}` : ""}`,
          title: `Comunidade Oficial de Far Cry | Trilha Sonora${game ? ` | ${game.game}` : ""}`,
          description: `Comunidade Oficial de Far Cry | Trilha Sonora${
            game ? ` | ${game.game}` : ""
          }`,
          images: [
            {
              url: ".",
              width: 800,
              height: 600,
              alt: `Comunidade Oficial de Far Cry | Trilha Sonora${game ? `${game.game}` : ""}`,
            },
            { url: `https://farcry.arqueirover.de/images/og-musicas-banner${game ? `-${game.id}` : ""}.jpg` },
          ],
          site_name: "Comunidade Oficial de Far Cry",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "https://farcry.arqueirover.de/icons/favicon.ico",
          },
        ]}
      />
      <select
        value={gameId || "default"}
        className={styles.select}
        onChange={(e) => handleClick(e)}>
        <option value="default" disabled>
          Selecione um jogo da franquia
        </option>
        {data.map((map) => (
          <option key={map.id} value={map.id}>
            {map.game}
          </option>
        ))}
      </select>

      {gameId && <MusicList songs={game.songs} gameId={gameId} />}
    </>
  );
};

export default GameList;

import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import styles from "@/styles/GameListSelection.module.scss";

import GameListMusic from "@/components/GameListMusic";

const GameListSelection = (props) => {
  // Recebe a informação da ID do jogo do componente principal
  const { games, game, songs } = props;

  // Filtra as músicas de acordo com o jogo selecionado
  const playlist = songs ? songs.filter((el) => el.gameId === game) : null;

  // Gera a URL com a rota: /musicas/jogo
  const router = useRouter();
  const handleClick = (e) => {
    const { value } = e.target;
    e.preventDefault();
    router.push(`/musicas/${value}`);
  };

  // Retorna a lista de jogos da franquia
  return (
    <>
      <NextSeo
        title="Comunidade Oficial de Far Cry | Trilha Sonora"
        description="Comunidade Oficial de Far Cry | Trilha Sonora"
        openGraph={{
          type: "website",
          url: "https://farcry.arqueirover.de/musicas",
          title: "Comunidade Oficial de Far Cry | Trilha Sonora",
          description: "Comunidade Oficial de Far Cry | Trilha Sonora",
          images: [
            {
              url: ".",
              width: 800,
              height: 600,
              alt: "Comunidade Oficial de Far Cry | Trilha Sonora",
            },
            { url: "../images/og-music-banner.jpg" },
          ],
          site_name: "Comunidade Oficial de Far Cry",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "../icons/favicon.ico",
          },
        ]}
      />
      <select value={game || "default"} className={styles.select} onChange={(e) => handleClick(e)}>
        <option value="default" disabled>
          Selecione um jogo da franquia
        </option>
        {games.map((map) => (
          <option key={map.gameId} value={map.gameId}>
            {map.gameTitle}
          </option>
        ))}
      </select>

      {game && <GameListMusic songs={playlist} game={game} />}
    </>
  );
};

export default GameListSelection;

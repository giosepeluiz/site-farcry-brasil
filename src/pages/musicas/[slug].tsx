import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "@/styles/Home.module.scss";
import GameListSelection from "@/components/GameListSelection";
import GameListHeader from "@/components/GameListHeader";

import { getAllGames, getAllSongs } from "@/data/dato_cms";

// Função que verifica se a URL aponta que é um jogo Far Cry
import { isFarCry } from "@/functions/playlistFn";

export default function Slug(props) {
  const { songs, games } = props;

  // Chama o hook useRouter()
  const router = useRouter();

  // Caso a rota retorne UNDEFINED, isso é ignorado
  if (typeof router.query.slug === "undefined") {
    return null;
  }

  // Caso retorne algo, será atribuído à constante ID
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Comunidade Oficial de Far Cry - Trilha Sonora"
        description="Comunidade Oficial de Far Cry - Trilha Sonora"
        openGraph={{
          type: "website",
          url: "https://farcry.arqueirover.de/musicas",
          title: "Comunidade Oficial de Far Cry - Trilha Sonora",
          description: "Comunidade Oficial de Far Cry - Trilha Sonora",
          images: [
            {
              url: ".",
              width: 800,
              height: 600,
              alt: "Comunidade Oficial de Far Cry - Trilha Sonora",
            },
            { url: "https://farcry.arqueirover.de/og-music-banner.jpg" },
          ],
          site_name: "SiteName",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "../icons/favicon.ico",
          },
        ]}
      />

      {/* Conteúdo principal */}

      <Header />

      <main className={styles.main}>
        {isFarCry(slug) ? (
          <>
            <GameListHeader game={slug} />
            <GameListSelection game={slug} games={games} songs={songs} />
          </>
        ) : (
          <div className={styles.error}>Opa! Jogo não encontrado.</div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const songs = await getAllSongs();
  console.log(songs);
  const games = await getAllGames();
  return {
    props: {
      songs,
      games,
    },
    revalidate: 100,
  };
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "fc2" } },
      { params: { slug: "fc3" } },
      { params: { slug: "fc3bd" } },
      { params: { slug: "fc4" } },
      { params: { slug: "fcprimal" } },
      { params: { slug: "fc5" } },
      { params: { slug: "fcnd" } },
      { params: { slug: "fc6" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

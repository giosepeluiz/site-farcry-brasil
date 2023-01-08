import { NextSeo } from "next-seo";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import styles from "@/styles/Home.module.scss";
import GameListSelection from "@/components/GameListSelection";
import GameListHeader from "@/components/GameListHeader";

import { getAllGames } from "@/data/dato_cms";

export default function Musicas({ games }) {
  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
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
            { url: "https://farcry.arqueirover.de/images/og-music-banner.jpg" },
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

      {/* Conteúdo principal */}

      <Header />

      <main className={styles.main}>
        <GameListHeader />
        <GameListSelection games={games} />
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const games = await getAllGames();
  return {
    props: {
      games,
    },
    revalidate: 100,
  };
};

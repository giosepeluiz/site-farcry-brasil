import { NextSeo } from "next-seo";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from "../../styles/Home.module.scss";
import GameList from "../../components/GameList";
import ListHeader from "../../components/ListHeader";

export default function Musicas() {
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
        <ListHeader />
        <GameList />
      </main>

      <Footer />
    </div>
  );
}

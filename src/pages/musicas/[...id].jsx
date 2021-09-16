import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import styles from "../../styles/Home.module.scss";
import GameList from "../../components/GameList";
import ListHeader from "../../components/ListHeader";

// Função que verifica se a URL aponta que é um jogo Far Cry
import { isFarCry } from "../../functions/playlistFunctions";

export default function Id() {
  // Chama o hook useRouter()
  const router = useRouter();

  // Caso a rota retorne UNDEFINED, isso é ignorado
  if (typeof router.query.id === "undefined") {
    return null;
  }

  // Caso retorne algo, será atribuído à constante ID
  const [id] = router.query.id;

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
            href: "icons/favicon.ico",
          },
        ]}
      />

      {/* Conteúdo principal */}

      <Header />

      <main className={styles.main}>
        {isFarCry(id) ? (
          <>
            <ListHeader gameId={id} />
            <GameList gameId={id} />
          </>
        ) : (
          <div className={styles.error}>Opa! Jogo não encontrado.</div>
        )}
      </main>

      <Footer />
    </div>
  );
}

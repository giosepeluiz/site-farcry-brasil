import { NextSeo } from "next-seo";
import Image from "next/image";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";
import Header from "../components/Header";

import styles from "../styles/Home.module.scss";
import fcLogo from "../../public/images/fc6-logo.webp";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Comunidade Oficial de Far Cry - Contagem Regressiva"
        description="Comunidade Oficial de Far Cry - Contagem Regressiva"
        openGraph={{
          type: "website",
          url: "https://farcry.arqueirover.de",
          title: "Comunidade Oficial de Far Cry - Contagem Regressiva",
          description: "Comunidade Oficial de Far Cry - Contagem Regressiva",
          images: [
            {
              url: ".",
              width: 800,
              height: 600,
              alt: "Comunidade Oficial de Far Cry - Contagem Regressiva",
            },
            { url: "images/og-banner.jpg" },
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
        <Image src={fcLogo} height="90" width="371" alt="Logo Far Cry 6" />
        <Countdown endDay={7} endMonth={10} endYear={2021} />
      </main>

      <Footer />
    </div>
  );
}

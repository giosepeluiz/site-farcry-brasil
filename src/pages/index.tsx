import { NextSeo } from "next-seo";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import Countdown from "@/components/Countdown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* SEO com personalização - Documentação: https://www.npmjs.com/package/next-seo */}
      <NextSeo
        title="Comunidade Oficial de Far Cry"
        description="Comunidade Oficial de Far Cry"
        openGraph={{
          type: "website",
          url: "https://farcry.arqueirover.de",
          title: "Comunidade Oficial de Far Cry",
          description: "Comunidade Oficial de Far Cry",
          images: [
            {
              url: ".",
              width: 800,
              height: 420,
              alt: "Comunidade Oficial de Far Cry",
            },
            { url: "/images/og-banner.jpg" },
          ],
          site_name: "Comunidade Oficial de Far Cry",
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/icons/favicon.ico",
          },
        ]}
      />

      {/* Conteúdo principal */}

      <Header />

      <main className={styles.main}>
        <div className={styles.logo}>
          <Image src="/images/fc6-logo.webp" height="90" width="371" alt="Logo Far Cry 6" />
        </div>
        <Countdown endDay={7} endMonth={10} endYear={2021} />
      </main>

      <Footer />
    </div>
  );
}

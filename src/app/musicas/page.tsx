"use client";

// Importando os estilos do módulo Home.module.scss
import Footer from "@/components/(home)/Footer";
import Header from "@/components/(home)/Header";
import GameListHeader from "@/components/(songs)/ListHeader";
import GameListSelection from "@/components/(songs)/ListSelection";
import styles from "@/styles/(songs)/Songs.module.scss";

export default function Songs() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <GameListHeader />
        <GameListSelection />
      </main>
      <Footer />
    </div>
  );
}

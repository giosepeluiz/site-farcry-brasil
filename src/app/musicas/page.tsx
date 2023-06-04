import Footer from "@/components/Footer";
import Header from "@/app/header";

import styles from "@/styles/Home.module.scss";
import GameListSelection from "./components/GameListSelection";
import GameListHeader from "./components/GameListHeader";

export default function Musicas() {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}

      <Header />

      <main className={styles.main}>
        <GameListHeader />
        <GameListSelection />
      </main>

      <Footer />
    </div>
  );
}

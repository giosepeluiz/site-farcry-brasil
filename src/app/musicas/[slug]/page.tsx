"use client";

// Importando os estilos do módulo Home.module.scss
import Footer from "@/components/(home)/Footer";
import Header from "@/components/(home)/Header";
import GameListHeader from "@/components/(songs)/ListHeader";
import GameListSelection from "@/components/(songs)/ListSelection";
import styles from "@/styles/(songs)/Songs.module.scss";
import { useParams } from "next/navigation";

// Função que verifica se a URL aponta que é um jogo Far Cry
import { isFarCry } from "@/functions/playlistFn";

export default function Slug(props: any) {
  const { songs, games } = props || null;

  // Chama o hook useRouter()
  const { slug } = useParams();

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        {isFarCry(slug.toString()) ? (
          <>
            <GameListHeader game={slug.toString()} />
            <GameListSelection game={slug.toString()} games={games} songs={songs} />
          </>
        ) : (
          <div className={styles.error}>Opa! Jogo não encontrado.</div>
        )}
      </main>
      <Footer />
    </div>
  );
}

import { useParams } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/app/header";

import styles from "@/styles/Home.module.scss";
import GameListSelection from "../components/GameListSelection";
import GameListHeader from "../components/GameListHeader";

// Importe o tipo Props corretamente
import { Props } from "@/models/Interfaces";

// Função que verifica se a URL aponta que é um jogo Far Cry
import { isFarCry } from "@/functions/playlistFn";

const Musicas: React.FC<Props> = (props) => {
  const { songs, games } = props;

  // Chama o hook useRouter()
  const { slug } = useParams();

  return (
    <div className={styles.container}>
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
};

export default Musicas;

// Importando os estilos do módulo Home.module.scss
"use client";

// Importando os componentes Header, Body e Footer
import Body from "@/components/(game)/Body";
import Footer from "@/components/(home)/Footer";
import Header from "@/components/(home)/Header";

// Importando os estilos do módulo Game.module.scss
import styles from "@/styles/(game)/Game.module.scss";

// Importando o hook useParams do Next.js para obter o parâmetro da URL
import { useParams } from "next/navigation";

export default function Game() {
  // Obtendo o parâmetro 'uid' da URL
  const { uid } = useParams();

  return (
    <div className={styles.container}>
      <Header />
      <Body uid={uid as string} />
      <Footer />
    </div>
  );
}

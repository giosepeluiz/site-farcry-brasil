// Importando o componente Image do pacote "next/image"
import Image from "next/image";

// Importando os estilos do módulo Home.module.scss
import styles from "@/styles/Home.module.scss";

// Importando o componente Loading do diretório "@/components/Loading"
import { Loading } from "@/components/Loading";

// Importando o componente Footer do diretório "@/components/Footer"
import Footer from "@/components/Footer";

// Importando o componente Header do diretório atual
import Header from "./header";

// Função principal do componente Home
export default function Home() {
  return (
    <div className={styles.container}>
      {/* Conteúdo principal */}
      <Header /> {/* Renderiza o componente Header */}
      <main className={styles.main}>
        <Loading /> {/* Renderiza o componente Loading */}
      </main>
      <Footer /> {/* Renderiza o componente Footer */}
    </div>
  );
}

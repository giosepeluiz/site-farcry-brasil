// Importando o componente Image do pacote "next/image"
import Image from "next/image";

// Importando os estilos do módulo Home.module.scss
import styles from "@/styles/Home.module.scss";

// Importando o componente Countdown do diretório "@/components/Countdown"
import Countdown from "@/components/Countdown";

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
        <div className={styles.logo}>
          {/* Renderiza a imagem com o caminho "/images/fc6-logo.webp",
              altura de 90 pixels, largura de 371 pixels e descrição "Logo Far Cry 6" */}
          <Image src="/images/fc6-logo.webp" height="90" width="371" alt="Logo Far Cry 6" />
        </div>

        {/* Renderiza o componente Countdown com as propriedades:
            endDay = 7, endMonth = 10, endYear = 2021 */}
        <Countdown endDay={7} endMonth={10} endYear={2021} />
      </main>
      <Footer /> {/* Renderiza o componente Footer */}
    </div>
  );
}

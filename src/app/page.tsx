// Importando os estilos do módulo Home.module.scss
import Footer from "@/components/(home)/Footer"; // Importando o componente Footer
import Header from "@/components/(home)/Header"; // Importando o componente Header
import Main from "@/components/(home)/Main"; // Importando o componente Main
import Timeline from "@/components/(home)/Timeline"; // Importando o componente Timeline
import styles from "@/styles/Home.module.scss"; // Importando os estilos do módulo Home.module.scss

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Main />
      <Timeline />
      <Footer />
    </div>
  );
}

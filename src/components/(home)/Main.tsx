// Importando os estilos específicos para o componente Main do módulo Main.module.scss
import styles from "@/styles/(home)/Main.module.scss";

// Importando o componente Image do pacote next/image
import Image from "next/image";

// Componente funcional Main, responsável por renderizar a seção principal da página inicial
const Main = () => {
  return (
    // Elemento principal com a classe definida nos estilos
    <main className={styles.main}>
      {/* Seção de conteúdo principal */}
      <section className={styles.content}>
        {/* Logo do jogo Far Cry 6 */}
        <Image
          src={"/images/logos/logo-fc6.png"}
          width={714}
          height={141}
          alt="Logo Far Cry 6"
          className={styles.content__fc6logo}
        />

        {/* Divisão de apresentação (aqui está vazia, pode ser necessário adicionar conteúdo) */}
        <div className={styles.content__presentation}></div>
      </section>

      {/* Indicador de rolar para baixo */}
      <div className={styles.main__scroll}>
        {/* Ícone de mouse */}
        <Image
          src={"/svg/icon-mouse.svg"}
          width={30}
          height={48}
          alt="Role para baixo"
          className={styles.main__scroll__icon}
        />

        {/* Setinha para baixo */}
        <Image
          src={"/svg/icon-arrowdown.svg"}
          width={30}
          height={15.12}
          alt="Role para baixo"
          className={styles.main__scroll__arrow}
        />
      </div>
    </main>
  );
};

// Exporta o componente Main para ser utilizado em outros lugares
export default Main;

// Importando os estilos específicos para o componente SectionGames do módulo Timeline.module.scss
import styles from "@/styles/(home)/Timeline.module.scss";

// Importando o componente Image do pacote next/image
import Image from "next/image";

// Importando os componentes LCard e RCard do diretório (timeline)/
import LCard from "../(timeline)/LCard";
import RCard from "../(timeline)/RCard";

// Importando a lista de jogos do arquivo data_games.js
import { gamelist } from "@/data/data_games";

// Componente funcional SectionGames, responsável por renderizar a seção de Linha do Tempo com os jogos
const SectionGames = () => {
  return (
    // Elemento de seção com a classe definida nos estilos
    <section className={styles.section}>
      {/* Contêiner da seção */}
      <div className={styles.section__wrapper}>
        {/* Título da seção */}
        <div className={styles.section__wrapper__title}>Linha do Tempo</div>

        {/* Conteúdo da seção */}
        <div className={styles.section__content}>
          {/* Mapeando a lista de jogos para renderizar os componentes LCard e RCard alternadamente */}
          {gamelist.map((game, index) => {
            // Renderiza LCard para índices pares e RCard para índices ímpares
            if (index % 2 === 0) {
              return <LCard key={index} {...game} />;
            } else {
              return <RCard key={index} {...game} />;
            }
          })}
        </div>
      </div>
    </section>
  );
};

// Exporta o componente SectionGames para ser utilizado em outros lugares
export default SectionGames;

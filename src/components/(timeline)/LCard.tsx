"use client";

// Importando os estilos específicos para o componente LCard do módulo Card.module.scss
import styles from "@/styles/(timeline)/Card.module.scss";

// Importando o componente Image do Next.js
import Image from "next/image";

// Importando o tipo CardProps da interface Card.interface
import { CardProps } from "@/interfaces/Card.interface";

// Importando a função gotoUrl do arquivo gotoUrl.ts
import gotoUrl from "@/functions/gotoUrl";

// Componente funcional LCard, responsável por renderizar um card na linha do tempo
const LCard = ({ title, uid, release, platform, cover }: CardProps) => {
  // Função que redireciona para a página do jogo ao ser clicado
  const handleClick = () => {
    gotoUrl(`/game/${uid}`, false);
  };

  // Retorna a estrutura do componente LCard
  return (
    // Container do card com ação de clique
    <div className={styles.lwrapper} onClick={handleClick}>
      <div className={styles.lcard}>
        {/* Título do jogo */}
        <div className={styles.lcard__title}>{title}</div>
        {/* Descrição com informações sobre lançamento e plataforma */}
        <div className={styles.lcard__description}>
          {release} &#x25CF; {platform}
        </div>
        {/* Capa do jogo */}
        <div className={styles.lcard__cover}>
          <Image
            src={`/images/covers/small/cover-${cover}.jpg`}
            width={143}
            height={190}
            alt={title}
          />
        </div>
      </div>
    </div>
  );
};

// Exporta o componente LCard para ser utilizado em outros lugares
export default LCard;

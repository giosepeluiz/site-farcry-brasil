"use client";

// Importando os estilos específicos para o componente RCard do módulo Card.module.scss
import styles from "@/styles/(timeline)/Card.module.scss";

// Importando o componente Image do Next.js
import Image from "next/image";

// Importando o tipo CardProps da interface Card.interface
import { CardProps } from "@/interfaces/Card.interface";

// Importando a função gotoUrl do arquivo gotoUrl.ts
import gotoUrl from "@/functions/gotoUrl";

// Componente funcional RCard, responsável por renderizar um card na linha do tempo
const RCard = ({ title, uid, release, platform, cover }: CardProps) => {
  // Função que redireciona para a página do jogo ao ser clicado
  const handleClick = () => {
    gotoUrl(`/game/${uid}`, false);
  };

  // Retorna a estrutura do componente RCard
  return (
    // Container do card com ação de clique
    <div className={styles.rwrapper} onClick={handleClick}>
      <div className={styles.rcard}>
        {/* Título do jogo */}
        <div className={styles.rcard__title}>{title}</div>
        {/* Descrição com informações sobre lançamento e plataforma */}
        <div className={styles.rcard__description}>
          {release} &#x25CF; {platform}
        </div>
        {/* Capa do jogo */}
        <div className={styles.rcard__cover}>
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

// Exporta o componente RCard para ser utilizado em outros lugares
export default RCard;

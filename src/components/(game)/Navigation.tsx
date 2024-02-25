// Importação da interface GameProps do arquivo Gamelist.interface
import { GameProps } from "@/interfaces/Gamelist.interface";

// Importação de ícones de seta da biblioteca Heroicons
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Importação dos estilos específicos para o componente Navigation
import styles from "@/styles/(game)/Navigation.module.scss";

// Importação do componente de link do Next.js
import Link from "next/link";

// Componente funcional Navigation que recebe props: type, list e id
const Navigation = ({ type, list, id }: { type: number; list: GameProps[]; id: number }) => {
  return (
    <>
      {type && type === -1 && (
        // Se type for -1, renderiza a navegação para trás
        <div className={styles.navigation}>
          {/* Link para o jogo anterior */}
          <Link href={`/game/${list[id].uid}`}>
            {/* Ícone de seta para a esquerda */}
            <ChevronLeftIcon className={styles.backward} /> {list[id].title}
          </Link>
          {/* Exibe uma barra vertical se houver um jogo dois lugares à frente na lista */}
          <span>{list[id] && list[id + 2] && `|`}</span>
        </div>
      )}

      {type && type === 1 && (
        // Se type for 1, renderiza a navegação para frente
        <div className={styles.navigation}>
          {/* Link para o próximo jogo */}
          <Link href={`/game/${list[id].uid}`}>
            {list[id].title} <ChevronRightIcon className={styles.forward} />
          </Link>
        </div>
      )}
    </>
  );
};

// Exporta o componente Navigation
export default Navigation;

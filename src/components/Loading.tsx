// Importando os estilos específicos para o componente Loading do módulo Loading.module.scss
import styles from "@/styles/Loading.module.scss";

// Componente funcional Loading, responsável por exibir um indicador de carregamento
const Loading = () => {
  // Retorna a estrutura do componente Loading
  return (
    // Container do indicador de carregamento
    <div className={styles.wrapper}>
      {/* Elemento que representa o indicador de carregamento */}
      <div className={styles.loading}></div>
    </div>
  );
};

// Exporta o componente Loading para ser utilizado em outros lugares
export default Loading;

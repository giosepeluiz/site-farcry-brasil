// Importando os estilos do módulo Header.module.scss
import styles from "@/styles/Header.module.scss";

// Importando o componente Menu do diretório "@/components/Menu"
import Menu from "@/components/Menu";

// Componente Header
const Header = () => {
  return (
    <header className={styles.header}>
      {/* Renderiza o componente Menu e passa os estilos como propriedade */}
      <Menu styles={styles} />
    </header>
  );
};

export default Header;

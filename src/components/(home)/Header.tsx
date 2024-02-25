// Importando o componente Menu do diretório components/(home)/
import Menu from "@/components/(home)/Menu";

// Importando os estilos específicos para o componente Header do módulo Header.module.scss
import styles from "@/styles/(home)/Header.module.scss";

// Componente funcional Header, responsável por renderizar o cabeçalho da página
const Header = () => {
  return (
    // Elemento de cabeçalho com a classe definida nos estilos
    <header className={styles.header}>
      {/* Renderizando o componente Menu dentro do cabeçalho */}
      <Menu />
    </header>
  );
};

// Exporta o componente Header para ser utilizado em outros lugares
export default Header;

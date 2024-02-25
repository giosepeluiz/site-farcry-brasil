// Importação dos estilos específicos para o componente Footer
import styles from "@/styles/(home)/Footer.module.scss";

// Componente funcional Footer, responsável por renderizar o rodapé da página
const Footer = () => {
  return (
    // Elemento de rodapé com a classe definida nos estilos
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        {/* Conteúdo do rodapé */}
        Desenvolvido com ❤️ por <strong>Giosepe Luiz</strong>
      </div>
    </footer>
  );
};

// Exporta o componente Footer para ser utilizado em outros lugares
export default Footer;

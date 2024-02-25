// Importando os estilos globais do arquivo globals.scss
import "@/styles/globals.scss";

// Importando a fonte Inter do pacote "next/font/google"
import { Inter } from "next/font/google";

// Configurando a fonte Inter com o subconjunto "latin"
const inter = Inter({ subsets: ["latin"] });

// Definindo os metadados para o layout raiz
export const metadata = {
  metadataBase: new URL("https://farcry.arqueirover.de"),
  title: "Início - Comunidade Oficial de Far Cry",
  description: "Início - Comunidade Oficial de Far Cry",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    default: "Início - Comunidade Oficial de Far Cry",
    description: "Início - Comunidade Oficial de Far Cry",
    url: "https://farcry.arqueirover.de",
    siteName: "Início - Comunidade Oficial de Far Cry",
    images: [
      {
        url: "/images/og-banner.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "pt-BR",
    type: "website",
  },
};

// Componente de layout raiz
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

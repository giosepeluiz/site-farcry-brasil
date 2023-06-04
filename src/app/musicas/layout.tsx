import "@/styles/globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

/* ****************************************************************
SEO com personalização
Documentação: https://nextjs.org/blog/next-13-2#built-in-seo-support-with-new-metadata-api
**************************************************************** */
export const metadata = {
  title: `Trilhas Sonoras - Comunidade Oficial de Far Cry`,
  description: "Trilhas Sonoras - Comunidade Oficial de Far Cry",
  icons: {
    icon: "/icons/favicon.ico",
  },
  openGraph: {
    default: "Trilhas Sonoras - Comunidade Oficial de Far Cry",
    description: "Trilhas Sonoras - Comunidade Oficial de Far Cry",
    url: "https://farcry.arqueirover.de/musicas",
    siteName: "Trilhas Sonoras - Comunidade Oficial de Far Cry",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

import type React from "react";
import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Dje Bi Dje Olivier Vamy - Député-Maire de Zuénoula",
  description:
    "Site officiel de Monsieur Dje Bi Dje Olivier Vamy, Député-Maire de la ville de Zuénoula, Côte d'Ivoire. Découvrez ses actions, projets et la vie de notre belle cité.",
  generator: "v0.app",
  keywords:
    "Zuénoula, Député-Maire, Dje Bi Dje Olivier Vamy, Côte d'Ivoire, Mairie, développement local",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${roboto.variable} ${robotoMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

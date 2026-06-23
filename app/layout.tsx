import type { Metadata } from "next";
import "./globals.css";

import '@fontsource-variable/sora/wght.css';
import '@fontsource-variable/jetbrains-mono/wght.css';

export const metadata: Metadata = {
  title: "Encodev",
  description: "Páginas web, sistemas a medida y formación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

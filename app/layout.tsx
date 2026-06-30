import type { Metadata } from "next";
import "./globals.css";
import "@fontsource-variable/sora/wght.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

const BASE_URL = "https://encodev.site";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: "Encodev — Desarrollo web profesional en Lima",
  description:
    "Creamos páginas web, sistemas a medida y ofrecemos formación en desarrollo web. Basados en Lima, Perú.",
  keywords: [
    "desarrollo web Lima",
    "páginas web Perú",
    "sistemas web a medida",
    "clases de programación Lima",
  ],
  authors: [{ name: "Encodev", url: BASE_URL }],

  alternates: {
    canonical: BASE_URL,
  },

  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Encodev",
    title: "Encodev — Desarrollo web profesional en Lima",
    description:
      "Páginas web, sistemas a medida y formación en desarrollo web. Basados en Lima, Perú.",
    locale: "es_PE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Encodev — Desarrollo web en Lima",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Encodev — Desarrollo web profesional en Lima",
    description:
      "Páginas web, sistemas a medida y formación en desarrollo web.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

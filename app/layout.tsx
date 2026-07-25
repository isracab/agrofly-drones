import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Footer, Header } from "./componentes/site-chrome";

const geistSans = localFont({
  variable: "--font-geist-sans",
  src: "../.vinext/fonts/geist-8ac0455e797f/geist-98bbbccb.woff2",
  display: "swap",
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  src: "../.vinext/fonts/geist-mono-00e989178794/geist-mono-013b2f2f.woff2",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Agrofly | Drones agrícolas DJI Agras",
    template: "%s | Agrofly",
  },
  description:
    "Distribuidor de drones agrícolas DJI Agras T100, T70P, T55 y T25P en México.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

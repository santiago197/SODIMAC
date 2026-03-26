import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TopMenu } from "@/components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sodimac-tau.vercel.app"),
  title: {
    default: "SODIMAC",
    template: "%s | Artículos de SODIMAC"
  },
  description: "Plataforma de artículos de SODIMAC",

  openGraph: {
    siteName: "SODIMAC Artículos",
    title: "SODIMAC",
    type: "website",
    locale: "es_CO",
    url: "https://sodimac-tau.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SODIMAC Artículos"
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">
        <TopMenu />
        {children}
      </body>
    </html>
  );
}

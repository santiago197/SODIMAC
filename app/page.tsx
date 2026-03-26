import CardArticulo from "@/components/articulos/card-articulo";
import { obtenerArticulos } from "@/lib/articulos";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SODIMAC - Artículos para el hogar",
  description: "Bienvenido a la plataforma de artículos de SODIMAC",

  openGraph: {
    title: "Inicio - SODIMAC Artículos",
    description: "Bienvenido a la plataforma de artículos de SODIMAC",
    url: "/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "SODIMAC Artículos"
      }
    ]
  }
}
export default function Home() {
  const articulos = obtenerArticulos(3);

  return (
    <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-bold">Artículos para el hogar</h1>
        <p className="text-sm text-gray-600">
          Descubre una selección de productos destacados de SODIMAC.
        </p>
      </header>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Últimos artículos</h2>
          <Link
            href="/articulos"
            className="text-sm text-blue-700 hover:underline"
          >
            Ver todos los artículos
          </Link>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {articulos.map((articulo) => (
            <li key={articulo.id}>
              <CardArticulo {...articulo} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

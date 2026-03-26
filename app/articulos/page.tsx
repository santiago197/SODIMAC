import CardArticulo from '@/components/articulos/card-articulo';
import { obtenerArticulos } from '@/lib/articulos';
import { Metadata } from 'next';
import { openGraphBase } from '@/lib/metadata';
export const metadata: Metadata = {
    title: "Artículos de SODIMAC",
    description: "Bienvenido a la plataforma de artículos de SODIMAC",
    openGraph: {
        ...openGraphBase,
        title: "Artículos de SODIMAC",
        description: "Bienvenido a la plataforma de artículos de SODIMAC",
        url: "/articulos",
    }
}
export default function ArticulosPage() {
    const articulos = obtenerArticulos();
    return (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
            <h1>Listado de articulos para el hogar</h1>
            <section>
                <ul className="grid gap-6 md:grid-cols-3">
                    {articulos.map(articulo => (
                        <li key={articulo.id}>
                            <CardArticulo  {...articulo} />
                        </li>
                    ))}
                </ul>
            </section>
        </main>
    )
}
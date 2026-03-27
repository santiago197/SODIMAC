import CardArticulo from '@/components/articulos/card-articulo';
import Paginacion from '@/components/ui/paginacion';
import { obtenerArticulosPaginados } from '@/lib/articulos';
import { openGraphBase } from '@/lib/metadata';
import { Metadata } from 'next';

const PAGE_SIZE = 3;

type Props = {
    searchParams: Promise<{ page?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const { page } = await searchParams;
    const paginaActual = Number(page ?? 1);
    const canonicalUrl = paginaActual <= 1 ? '/articulos' : `/articulos?page=${paginaActual}`;

    return {
        title: "Artículos de SODIMAC",
        description: "Bienvenido a la plataforma de artículos de SODIMAC",
        alternates: {
            canonical: canonicalUrl,
        },
        openGraph: {
            ...openGraphBase,
            title: "Artículos de SODIMAC",
            description: "Bienvenido a la plataforma de artículos de SODIMAC",
            url: canonicalUrl,
        },
    };
}

export default async function ArticulosPage({ searchParams }: Props) {
    const { page } = await searchParams;
    const paginaActual = Number(page ?? 1);
    const { items, totalPaginas, paginaActual: paginaValida } = obtenerArticulosPaginados(paginaActual, PAGE_SIZE);

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
            <h1>Listado de artículos para el hogar</h1>
            <section>
                <ul className="grid gap-6 md:grid-cols-3">
                    {items.map(articulo => (
                        <li key={articulo.id}>
                            <CardArticulo {...articulo} />
                        </li>
                    ))}
                </ul>
            </section>

            <Paginacion
                paginaActual={paginaValida}
                totalPaginas={totalPaginas}
                basePath="/articulos"
            />
        </main>
    );
}

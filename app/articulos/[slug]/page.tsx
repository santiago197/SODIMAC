import DetailArticulo from "@/components/articulos/detail-articulo"
import { obtenerArticulosPorSlug } from "@/lib/articulos"
import { openGraphBase } from "@/lib/metadata"
import { Metadata } from "next"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ slug: string }>
}

type ArticleJsonLD ={
    "@context": string;
    "@type": string;
    headline: string;
    description: string;
    image: string;
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug

    const articulo = obtenerArticulosPorSlug(slug);

    if (!articulo) {
        return {}
    }
    return {
        title: articulo.title,
        description: articulo.description,
        openGraph: {
            ...openGraphBase,
            title: articulo.title,
            description: articulo.description,
            url: `/articulos/${articulo.slug}`,
            type: 'article',
            images: [
                {
                    url: articulo.thumbnail.url,
                    width: 1200,
                    height: 630,
                    alt: articulo.thumbnail.alt
                }
            ]
        }
    }
}
export default async function ArticuloDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const articulo = await obtenerArticulosPorSlug(slug);
    if (!articulo) {
        notFound();
    }

    const jsonLd: ArticleJsonLD = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articulo.title,
        description: articulo.description,
        image: articulo.thumbnail.url
    };

    return (
        <main className="max-w-6xl mx-auto px-4 py-8 space-y-8">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <DetailArticulo articulo={articulo} />
        </main>
    );
}
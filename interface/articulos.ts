export interface Articulos {
    product: Articulo;
}
export interface Articulo {
    id: number;
    title: string;
    slug: string;
    description: string;
    content: string;
    thumbnail: {
        url: string;
        alt: string;
    };
    publishedAt: string;
    autor: string;
}

import { obtenerArticulos } from "@/lib/articulos";
import { Metadata, MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const articulos = obtenerArticulos();

    return [
        {
            url: "https://sodimac-tau.vercel.app/",
        },
        {
            url: "https://sodimac-tau.vercel.app/articulos",
        },
        ...articulos.map(articulo => ({
            url: `https://sodimac-tau.vercel.app/articulos/${articulo.slug}`,
        }))
    ]
}
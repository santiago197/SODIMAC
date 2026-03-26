import data from "./data.json";
import { Articulo } from "@/interface/articulos";

export function obtenerArticulos(limit?: number):Articulo[] {
    const articulos = data as Articulo[];
    if (limit) {
        return articulos.slice(0, limit);
    }
    return articulos
}
export function obtenerArticulosPorSlug(slug: string) {
    const articulos = data as Articulo[];
    return articulos.find(articulo => articulo.slug === slug);
}
import data from "./data.json";
import { Articulo } from "@/interface/articulos";

export function obtenerArticulos(limit?: number): Articulo[] {
    const articulos = data as Articulo[];
    if (limit) {
        return articulos.slice(0, limit);
    }
    return articulos;
}

export function obtenerArticulosPaginados(page: number, pageSize: number) {
    const articulos = data as Articulo[];
    const total = articulos.length;
    const totalPaginas = Math.ceil(total / pageSize);
    const paginaValida = Math.min(Math.max(page, 1), totalPaginas);
    const inicio = (paginaValida - 1) * pageSize;
    const items = articulos.slice(inicio, inicio + pageSize);
    return { items, total, totalPaginas, paginaActual: paginaValida };
}

export function obtenerArticulosPorSlug(slug: string) {
    const articulos = data as Articulo[];
    return articulos.find(articulo => articulo.slug === slug);
}
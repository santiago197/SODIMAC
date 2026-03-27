import Link from "next/link";

type Props = {
    paginaActual: number;
    totalPaginas: number;
    basePath: string;
};

export default function Paginacion({ paginaActual, totalPaginas, basePath }: Props) {
    const urlPagina = (page: number) =>
        page === 1 ? basePath : `${basePath}?page=${page}`;

    return (
        <nav aria-label="Paginación de artículos" className="flex items-center justify-center gap-2">
            <Link
                href={urlPagina(paginaActual - 1)}
                aria-label="Página anterior"
                aria-disabled={paginaActual === 1}
                tabIndex={paginaActual === 1 ? -1 : undefined}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors
                    ${paginaActual === 1
                        ? "pointer-events-none border-gray-200 text-gray-300"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
            >
                ← Anterior
            </Link>

            <ol className="flex items-center gap-1" aria-label="Páginas">
                {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((page) => (
                    <li key={page}>
                        <Link
                            href={urlPagina(page)}
                            aria-label={`Página ${page}`}
                            aria-current={page === paginaActual ? "page" : undefined}
                            className={`inline-flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors
                                ${page === paginaActual
                                    ? "bg-blue-700 text-white"
                                    : "border border-gray-300 text-gray-700 hover:bg-gray-100"
                                }`}
                        >
                            {page}
                        </Link>
                    </li>
                ))}
            </ol>

            <Link
                href={urlPagina(paginaActual + 1)}
                aria-label="Página siguiente"
                aria-disabled={paginaActual === totalPaginas}
                tabIndex={paginaActual === totalPaginas ? -1 : undefined}
                className={`inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium transition-colors
                    ${paginaActual === totalPaginas
                        ? "pointer-events-none border-gray-200 text-gray-300"
                        : "border-gray-300 text-gray-700 hover:bg-gray-100"
                    }`}
            >
                Siguiente →
            </Link>
        </nav>
    );
}

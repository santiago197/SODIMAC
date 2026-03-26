
import { Articulo } from "@/interface/articulos";
import Image from "next/image";
import Link from "next/link";

export default function DetailArticulo({ articulo }: { articulo: Articulo }) {
  const fecha = new Date(articulo.publishedAt).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <article className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-8 md:flex-row">
      <div className="relative h-80 w-full overflow-hidden rounded-xl md:h-[420px] md:w-1/2">
        <Image
          src={articulo.thumbnail.url}
          alt={articulo.thumbnail.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex w-full flex-1 flex-col gap-4 md:w-1/2">
        <div className="text-xs uppercase tracking-wide text-gray-500">
          <span>{articulo.autor}</span>
          <span className="mx-2">·</span>
          <span>{fecha}</span>
        </div>

        <h1 className="text-2xl font-semibold text-gray-900 md:text-3xl">
          {articulo.title}
        </h1>

        <p className="text-sm text-gray-700 md:text-base">
          {articulo.description}
        </p>

        <div className="mt-2 rounded-lg bg-gray-50 p-4 text-sm leading-relaxed text-gray-700">
          {articulo.content}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Link
            href="/articulos"
            className="inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-100"
          >
            ← Volver a los artículos
          </Link>
        </div>
      </div>
    </article>
  );
}
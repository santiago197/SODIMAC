import { Articulo } from "@/interface/articulos";
import Image from "next/image";
import Link from "next/link";

const CardArticulo = ({ title, description, slug, thumbnail, autor, publishedAt }: Articulo) => {
  const fecha = new Date(publishedAt).toLocaleDateString("es-CO", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <Link
      href={`/articulos/${slug}`}
      className="group block h-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
    >
      <article className="flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-transform transition-shadow duration-150 group-hover:-translate-y-1 group-hover:shadow-md">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={thumbnail.url}
            alt={thumbnail.alt}
            fill
            className="object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2 p-4">
          <div className="flex items-center justify-between text-[11px] uppercase tracking-wide text-gray-500">
            <span>{autor}</span>
            <span>{fecha}</span>
          </div>

          <h3 className="mt-1 line-clamp-2 text-sm font-semibold text-gray-900">
            {title}
          </h3>

          <p className="line-clamp-3 text-xs text-gray-600">
            {description}
          </p>

          <span className="mt-auto inline-flex items-center pt-2 text-xs font-semibold text-blue-700 group-hover:text-blue-800">
            Ver más detalles
            <span className="ml-1 text-[10px]">➜</span>
          </span>
        </div>
      </article>
    </Link>
  );
};

export default CardArticulo;
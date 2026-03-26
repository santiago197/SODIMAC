import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-[60vh] items-center justify-center px-4 py-12">
            <section className="max-w-md text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700">
                    404
                </div>

                <h1 className="text-xl font-semibold text-gray-900">
                    Página no encontrada
                </h1>
                <p className="mt-2 text-sm text-gray-600">
                    Lo sentimos, la página que estás buscando no existe o ya no está disponible.
                </p>

                <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full border border-gray-300 px-5 py-2 font-medium text-gray-700 transition-colors hover:bg-gray-100"
                    >
                        Volver al inicio
                    </Link>
                </div>
            </section>
        </main>
    )
}

import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  return (
    <nav className="flex w-full items-center justify-between border-b border-gray-200 bg-white px-5 py-3">
      <div>
        <Link href="/">
          <span className="antialiased font-bold">SODIMAC</span>
          <span className="ml-2 text-sm text-gray-500"> | Articulos</span>
        </Link>
      </div>

      <div className="hidden sm:block">
        <Link
          className="m-2 rounded-md p-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
          href="/articulos"
        >
          Articulos
        </Link>
      </div>    
    </nav>
  );
}

import Link from "next/link"
import { IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
    return (
        <nav className="flex px-5 justify-between items-center w-full">
            <div>

                <Link href="/"><span className="antialiased font-bold">SODIMAC</span>
                    <span className="ml-2 text-sm text-gray-500"> | Tienda</span>
                </Link>

            </div>

            <div className="hidden sm:block">
                <Link className="m-2 p-2 rounded-md transition-all hover:bg-gray-200" href="/products">Productos</Link>
            </div>

            <div className="flex items-center">
                <Link href="/cart" className="relative">
                    <div className="relative">
                        <span className="absolute text-xs rounded-full px-1 font-bold -top-2  bg-blue-700 text-white">3</span>
                        <IoCartOutline className="w-5 h-5" />
                    </div>
                </Link>
            </div>
        </nav>
    )
}

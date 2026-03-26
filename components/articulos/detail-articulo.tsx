
import { Articulo } from "@/interface/articulos";
import Image from "next/image";

export default function DetailArticulo({ title, description, thumbnail }: Articulo) {
    return <section>
        <Image src={thumbnail.url} alt={thumbnail.alt} width={500} height={500} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Ver más detalles</button>
    </section>
}
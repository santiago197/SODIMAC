import { Product } from "@/interface/articulos";
import Image from "next/image";

export default function DetailProduct({ title,description,price , content,thumbnail }: Product) {
    return <main>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>Precio: ${price.toFixed(2)}</p>
        <Image src={thumbnail} alt={title} width={300} height={300} />
        <p>{content}</p>
    </main>;
}
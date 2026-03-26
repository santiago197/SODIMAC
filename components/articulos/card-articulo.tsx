import { Products } from "@/interface/articulos";

const Home = ({ product }: Products) => {
    return (
        <main>
            <h1>{product.title}</h1>
        </main>
    );
}

export default Home;
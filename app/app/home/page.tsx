import HomePage from "@/components/home/home";
import { getProducts } from "@/data/product";

export default async function Home() {
    const product = await getProducts();
    return (
        <div>
            <HomePage data={product} />
        </div>
    )
}
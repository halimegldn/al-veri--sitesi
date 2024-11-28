import ShopPage from "@/components/shop/shop";
import { getProducts } from "@/data/product";

export default async function Shop() {
    const product = await getProducts();
    return (
        <div>
            <ShopPage data={product} />
        </div>
    )
}
import CartPage from "@/components/shop/cart";
import { getProducts } from "@/data/product";

export default async function Cart() {
    return (
        <div>
            <CartPage />
        </div>
    )
}
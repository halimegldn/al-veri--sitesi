
"use client";

import { Products } from "@prisma/client";
import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WishlistPage() {
    const [cart, setCart] = React.useState<Products[]>([]);
    const router = useRouter();
    const [sayi, setSayi] = React.useState(1);
    React.useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    const removeFromWishlist = (productId: string) => {
        const updatedWhislist = cart.filter((product) => product.id !== productId);
        setCart(updatedWhislist);
        localStorage.setItem("cart", JSON.stringify(updatedWhislist)); // Favorileri güncelle
    };
    const addToCart = (product: Products) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]");
        cart.push({ ...product, quantity: sayi });
        localStorage.setItem("cart", JSON.stringify(cart));

        router.push("/shop/cart");
    };

    return (
        <div className="py-32">
            <div className="px-16 py-8">
                <h1 className="text-4xl font-bold">Wishlist</h1>
                <span className="text-sm mt-3"><Link href="/" className="hover:text-green-800">Home</Link> *Wishlist</span>
            </div>
            <div className="flex items-center justify-evenly">
                <div className="w-3/5">
                    {cart.length === 0 ? (
                        <p>There are no products in your favorites page.</p>
                    ) : (
                        cart.map((product) => (
                            <Card key={product.id} className="items-center m-auto mb-5 w-full">
                                <CardContent className="m-auto p-6">
                                    <div className="flex w-full items-center gap-4 justify-between p-4">
                                        <div className="flex-1 text-start">
                                            <img src={product.product_image} alt={product.name} className="object-cover w-1/2 h-1/2" />
                                        </div>
                                        <div className="flex-1 text-start">
                                            <p>{product.name}</p>
                                        </div>
                                        <div className="flex-1 text-start">
                                            <p>{product.price} $</p>
                                        </div>
                                        <div className="flex-1 text-center">
                                            <Link href="/shop/cart">
                                                <Button
                                                    variant={"default"}
                                                    onClick={() => addToCart(product)}>Add To Cart
                                                </Button>
                                            </Link>
                                        </div>
                                        <div>
                                            <Button variant="destructive" onClick={() => removeFromWishlist(product.id)}>Remove</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </div>

    );
}


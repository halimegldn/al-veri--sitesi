
"use client";

import { Products } from "@prisma/client";
import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export default function CartPage() {
    const [cart, setCart] = React.useState<Products[]>([]);

    React.useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(storedCart);
    }, []);

    const removeFromCart = (productId: string) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sepeti güncelle
    };

    const total = cart.reduce((totalPrice, product) => {
        return totalPrice + (product.price * (product.quantity || 1)); // quantity yoksa 1 al
    }, 0);
    return (
        <div className="py-32">
            <div className="px-16 py-8">
                <h1 className="text-4xl font-bold">Shop</h1>
                <span className="text-sm mt-3"><Link href="/" className="hover:text-green-800">Home</Link> *Cart</span>
            </div>
            <div className="flex items-center justify-evenly">
                <div className="w-3/5">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((product) => (
                            <Card key={product.id} className="items-center m-auto mb-5 w-full">
                                <CardContent className="m-auto p-6">
                                    <div className="flex w-full items-center gap-4 justify-between p-4">
                                        <div className="flex-1 text-start">
                                            <img src={product.product_image} alt={product.name} className="object-cover w-1/4 h-1/2" />
                                        </div>
                                        <div className="flex-1 text-start">
                                            <p>{product.name}</p>
                                        </div>
                                        <div className="flex-1 text-start">
                                            <p>{product.price} $</p>
                                        </div>
                                        <div>
                                            <Button variant="destructive" onClick={() => removeFromCart(product.id)}>Remove</Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
                <div className="p-16 shadow w-1/4 text-2xl font-bold">
                    <div className="border-b-2 flex justify-between">
                        <h1>Subtotal</h1>
                        <h1>{total} $</h1>
                    </div>
                    <div className="border-b-2 flex justify-between">
                        <h1>Total</h1>
                        <h1>{total} $</h1>
                    </div>
                </div>
            </div>
        </div>

    );
}


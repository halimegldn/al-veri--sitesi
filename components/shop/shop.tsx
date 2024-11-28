"use client";

import { Products } from "@prisma/client";
import * as React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { FaRegEye, FaCartShopping } from "react-icons/fa6";
import { MdFavorite } from "react-icons/md";
import Link from "next/link";
import { MdFavoriteBorder } from "react-icons/md";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { toast, Toaster } from 'react-hot-toast';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "../ui/pagination";

export default function ShopPage({ data }: { data: Products[] }) {
    const router = useRouter();
    const [sayi, setSayi] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [sortedData, setSortedData] = React.useState<Products[]>(data); // Sıralanmış ürün verisini tutacak
    const productsPerPage = 6;
    const totalPages = Math.ceil(sortedData.length / productsPerPage); // Toplam sayfa sayısı

    // Sayfayı artıran fonksiyon
    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Sayfayı azaltan fonksiyon
    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    // Sayfaya göre verileri almak
    const currentProducts = sortedData.slice(
        (currentPage - 1) * productsPerPage,
        currentPage * productsPerPage
    );

    const arttirma = () => {
        setSayi(sayi + 1);
    };

    const azaltma = () => {
        if (sayi <= 1) {
            return 1;
        } else {
            setSayi(sayi - 1);
        }
    };

    const showToast = () => {
        toast.success('The product has been added to the cart.');
    };

    const addToCart = (product: Products) => {
        const cart = JSON.parse(localStorage.getItem("cart") || "[]"); // Sepetteki ürünleri al veya sepet boşsa yeni bir dizi oluştur

        const existingProductIndex = cart.findIndex((item: { id: string; }) => item.id === product.id); // Sepette bu ürün var mı diye kontrol et

        if (existingProductIndex >= 0) { // Eğer ürün zaten sepette varsa
            cart[existingProductIndex].quantity += sayi; // Ürünün miktarını mevcut sayıya ekle
        } else {
            cart.push({ ...product, quantity: sayi }); // Eğer ürün sepette yoksa yeni ürünü sepete ekle ve miktarını belirle
        }

        localStorage.setItem("cart", JSON.stringify(cart)); // Güncellenmiş sepeti localStorage'a kaydet

        showToast();

        router.push("/shop/cart");
    };



    const addToWishlist = (product: Products) => {
        const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
        wishlist.push({ ...product, quantity: sayi });
        localStorage.setItem("wishlist", JSON.stringify(wishlist));

        showToast();
        router.push("/shop/wishlist");
    };

    // Sıralama fonksiyonu
    const handleSortChange = (sortOrder: 'asc' | 'desc') => {
        let sortedProducts = [...data]; // Orijinal veriyi değiştirmemek için bir kopya alma

        if (sortOrder === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price); // Artan fiyat sıralaması
        } else if (sortOrder === 'desc') {
            sortedProducts.sort((a, b) => b.price - a.price); // Azalan fiyat sıralaması
        }

        setSortedData(sortedProducts);
        setCurrentPage(1); // Sayfa 1'e sıfırlanması
    };

    return (
        <div className="flex justify-between py-32 px-4">
            <div className="w-1/5 mt-10 p-5">
                <h1 className="text-4xl font-bold">Shop</h1>
                <span className="text-sm mt-3"><Link href="/" className="hover:text-green-800">Home</Link> *Shop</span>
                <div className="grid mt-16">
                    <h3 className="font-bold text-md">Categories</h3>
                    <ul>
                        <Link href="/shop" className="hover:text-green-800 text-sm">
                            <li className="flex justify-between">
                                <span>Meat</span>
                                <span>3</span>
                            </li>
                        </Link>
                        <Link href="/shop" className="text-sm hover:text-green-800">
                            <li className="flex justify-between ">
                                <span>Vegetable</span>
                                <span>5</span>
                            </li>
                        </Link>
                        <Link href="/shop" className="text-sm hover:text-green-800">
                            <li className="flex justify-between">
                                <span>Fruit</span>
                                <span>3</span>
                            </li>
                        </Link>
                        <Link href="/shop" className="text-sm hover:text-green-800">
                            <li className="flex justify-between">
                                <span>Baby Foods</span>
                                <span>3</span>
                            </li>
                        </Link>
                    </ul>
                </div>
                <div className="grid mt-16">
                    <h3 className="font-bold text-md">Top Rated Products</h3>
                    <ul>
                        <li className="flex justify-between">
                            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FSsDV0wS%2Fproduct-3.jpg&w=256&q=75" className="w-10 h-10" />
                            <div className="grid">
                                <span className="text-sm my-auto">Broccoli</span>
                            </div>
                        </li>
                        <li className="flex justify-between">
                            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FCHNzG2v%2Fproduct-1.jpg&w=256&q=75" className="w-10 h-10" />
                            <div className="grid">
                                <span className="text-sm my-auto">Walnut</span>
                            </div>
                        </li>
                        <li className="flex justify-between">
                            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2F5RQGVYy%2Fproduct-2.jpg&w=384&q=75" className="w-10 h-10" />
                            <div className="grid">
                                <span className="text-sm my-auto">Strawberry</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="grid mt-16">
                    <h3 className="font-bold text-md">Popular Brands</h3>
                    <div className="flex justify-between p-2">
                        <Button className="tp-shop-widget-brand-item w-100 rounded-full" variant={"outline"}>Fresh Farms</Button>
                        <Button className="tp-shop-widget-brand-item w-100 rounded-full" variant={"outline"}>Boar's Head</Button>
                    </div>
                </div>
            </div>
            <div className="w-11/12">
                <Toaster position="top-center" />
                <div className="flex justify-end p-8">
                    {/* Sorting Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="border p-2">Default Sorting</DropdownMenuTrigger>
                        <DropdownMenuContent className="text-black">
                            <DropdownMenuItem onClick={() => handleSortChange('asc')}>
                                Low to High
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleSortChange('desc')}>
                                High to Low
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    {currentProducts.map((product) => (
                        <Card key={product.id} className="flex col-span-1 group border-none">
                            <div className="flex-col bg-background my-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                                <div className="bg-secondary flex justify-center mb-2 p-2">
                                    <Dialog >
                                        <DialogTrigger className="mx-auto"><FaRegEye /></DialogTrigger>
                                        <DialogContent className="max-w-4xl p-14">
                                            <div className="grid grid-cols-2">
                                                <div className="col-span-1">
                                                    <img src={product.product_image} alt={product.name} className="object-cover" />
                                                </div>
                                                <div className="col-span-1 my-auto">
                                                    <DialogHeader>
                                                        <DialogTitle className="text-xs text-slate-600 font-normal">{product.type}</DialogTitle>
                                                        <DialogTitle className="text-3xl">{product.name}</DialogTitle>
                                                        <DialogDescription>{product.description}</DialogDescription>
                                                        <DialogDescription className="text-3xl font-normal text-black">{product.price} $</DialogDescription>
                                                        <div className="flex justify-between">
                                                            <div className="flex my-auto">
                                                                <Button variant={"secondary"} onClick={azaltma}>-</Button>
                                                                <span className="m-auto">{sayi}</span>
                                                                <Button variant={"secondary"} onClick={arttirma}>+</Button>
                                                            </div>
                                                            <div>
                                                                <Button
                                                                    variant="destructive"
                                                                    onClick={() => addToCart(product)}
                                                                >
                                                                    Add To Cart
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="mt-10">
                                                            <Button onClick={() => addToWishlist(product)} variant={"secondary"} className="hover:text-green-800"><MdFavoriteBorder />Add To Whislist</Button>
                                                        </div>
                                                    </DialogHeader>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                                <div className="mb-2">
                                    <Button variant={"secondary"} onClick={() => addToCart(product)}><FaCartShopping /></Button>
                                </div>
                                <div>
                                    <Button variant={"secondary"} onClick={() => addToWishlist(product)}><MdFavorite /></Button>
                                </div>
                            </div>
                            <CardContent className="m-auto gap-3">
                                <div className="flex items-center">
                                    <img src={product.product_image} alt={product.name} className="object-cover" />
                                </div>
                                <div className="grid items-center justify-start mt-3">
                                    <div className="text-xs text-slate-600"><h6>{product.type}</h6></div>
                                    <Link href="/shop/cart"><h3 className="tp-product-title-5 text-lg hover:text-green-800">{product.name}</h3></Link>
                                    <div className=""><h3>{product.price} $</h3></div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <Pagination className="py-10">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious onClick={prevPage} />
                        </PaginationItem>
                        {[...Array(totalPages)].map((_, index) => (
                            <PaginationItem key={index}>
                                <PaginationLink
                                    href="#"
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={nextPage} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>
        </div>
    );
}

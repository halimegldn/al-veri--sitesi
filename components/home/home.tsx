"use client";

import { Products } from "@prisma/client";
import * as React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { LuTruck, LuDollarSign, LuCreditCard, LuHeadphones } from "react-icons/lu";

export default function HomePage({ data }: { data: Products[] }) {
    const router = useRouter();
    const [currentPage, setCurrentPage] = React.useState(1);
    const productsPerPage = 8; // 8 ürün göstereceğiz

    // İlk 8 ürünü almak için veri sınırlama
    const limitedData = data.slice(0, productsPerPage);

    const images = [
        { image: "https://i.ibb.co.com/Jx08P4v/category-1.jpg", title: "Froozen Foods" },
        { image: "https://i.ibb.co.com/zR9KwVD/category-2.jpg", title: "Meat and Fish" },
        { image: "https://i.ibb.co.com/VQJQvPw/category-3.jpg", title: "Milk & Dairy" },
        { image: "https://i.ibb.co.com/cLDPSzD/category-4.jpg", title: "Beverages" },
        { image: "https://i.ibb.co.com/dMyRcbd/category-5.jpg", title: "Vegetables" },
        { image: "https://i.ibb.co.com/9ZRcSY0/category-6.jpg", title: "Fruits" },
    ];

    return (
        <div className="px-0">
            <div className="flex py-32" style={{ backgroundColor: "#f3f3f3" }}>
                <div className="grid text-center m-auto">
                    <span className="text-7xl w-3/4 mx-auto py-4">The Online Grocery Store</span>
                    <Link href="/blog/details" className="text-center"><Button className="rounded-2xl px-8">Shop Now</Button></Link>
                </div>
                <div>
                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider-1.fcfd27c4.png&w=1080&q=75" />
                </div>
            </div>
            <div className="py-32 grid">
                <div className="gird text-center pt-10">
                    <span className="text-green-800">Shop by Category</span>
                    <h1 className="font-bold text-4xl">Popular on the Shofi store.</h1>
                </div>
                <div className="flex justify-center w-full pt-[80px] ">
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-11/12"
                    >
                        <CarouselContent>
                            {images.map((index) => (
                                <CarouselItem key={index.title} className="md:basis-1/2 lg:basis-1/5">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex-col text-center aspect-square items-center justify-center p-10">
                                                <Link href="/shop"><span className="hover:text-green-800">{index.title}</span></Link>
                                                <img src={index.image} alt={""} className="mt-2" />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
            <div className="w-10/12 mx-auto py-32">
                <div className="gird text-start pt-10">
                    <span className="text-green-800">All Product Shop</span>
                    <h1 className="font-bold text-4xl">Featured Products</h1>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8 ">
                    {limitedData.length > 0 ? (
                        limitedData.map((product) => (
                            <Card key={product.id} className="grid col-span-1 group">
                                <CardContent className="m-auto p-6">
                                    <div className="grid w-full items-center gap-4 justify-between p-4">
                                        <div className="flex-1 text-start">
                                            <img src={product.product_image} alt={product.name} className="object-cover w-full h-48" />
                                        </div>
                                        <Link href="/shop">
                                            <div className="text-xs text-slate-600 font-normal">
                                                <p>{product.name}</p>
                                            </div>
                                        </Link>
                                        <Link href="/shop">
                                            <div className="flex-1 text-start hover:text-green-800">
                                                <p>{product.price} $</p>
                                            </div>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}

                </div>
                <div className="text-center p-10">
                    <Link href="/shop" className="text-center"><Button className="rounded-2xl px-8">Shop Now</Button></Link>
                </div>
            </div>
            <div className="flex justify-between my-10 py-24" style={{ backgroundColor: "#f3f3f3" }}>
                <div>
                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-2.0acdde07.png&w=640&q=75" />
                </div>
                <div className="grid items-center justify-center text-center w-3/5">
                    <span className="text-green-800">Best Deals of the week!</span>
                    <span className="text-7xl">Grab the best Offer Of this Week!</span>
                </div>
                <div>
                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshape-4.d8e2da64.png&w=640&q=75" />
                </div>
            </div>
            <div className="flex justify-around w-full py-32">
                <div className="w-1/5 ms-8">
                    <Card className="h-full text-center" style={{ backgroundColor: "#EEEBE4" }}>
                        <CardHeader>
                            <CardTitle className="mx-auto"><img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproduct%2Fside%2Fpre-title.png&w=256&q=75" /></CardTitle>
                        </CardHeader>
                        <CardContent className="text-2xl font-bold">
                            <p>Get Up to 26% Off Vegetables</p>
                        </CardContent>
                        <CardContent>
                            <Link href="/shop" className="text-center"><Button className="rounded-2xl px-8">Shop Now</Button></Link>
                        </CardContent>
                        <CardFooter>
                            <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fproduct%2Fside%2Fside-1.png&w=256&q=75" />
                        </CardFooter>
                    </Card>
                </div>
                <div className="flex w-3/4 justify-evenly">
                    <div className="grid w-2/5 gap-3">
                        <div>
                            <h1 className="font-bold text-xl">Top Selling Products</h1>
                        </div>
                        <Card className="flex justify-start hover:border-2 hover:border-green-800">
                            <CardHeader>
                                <CardDescription className="w-1/2 hover:scale-125 transition">
                                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2F5RQGVYy%2Fproduct-2.jpg&w=256&q=75" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="m-auto text-center w-2/4">
                                <p className="text-xs">Strowberry</p>
                                <p className="font-bold">Grapefruit</p>
                                <span>49 $</span>
                            </CardContent>
                        </Card>
                        <Card className="flex justify-start hover:border-2 hover:border-green-800">
                            <CardHeader>
                                <CardDescription className="w-1/2 hover:scale-125 transition">
                                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FSsDV0wS%2Fproduct-3.jpg&w=256&q=75" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="m-auto text-center w-2/4">
                                <p className="text-xs">Meat</p>
                                <p className="font-bold">Economic</p>
                                <span>60 $</span>
                            </CardContent>
                        </Card>
                        <Card className="flex justify-start hover:border-2 hover:border-green-800">
                            <CardHeader>
                                <CardDescription className="w-1/2 hover:scale-125 transition">
                                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FCHNzG2v%2Fproduct-1.jpg&w=256&q=75" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="m-auto text-center w-2/4">
                                <p className="text-xs">Baby Food</p>
                                <p className="font-bold">Economic Linen Pants</p>
                                <span>30 $</span>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid w-2/5 gap-3">
                        <div>
                            <h1 className="font-bold text-xl">Top Rated Products</h1>
                        </div>
                        <Card className="flex justify-start hover:border-2 hover:border-green-800">
                            <CardHeader>
                                <CardDescription className="w-1/2 hover:scale-125 transition">
                                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FCHNzG2v%2Fproduct-1.jpg&w=256&q=75" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="m-auto text-center w-2/4">
                                <p className="text-xs">Baby Food</p>
                                <p className="font-bold">Economic Linen Pants</p>
                                <span>30 $</span>
                            </CardContent>
                        </Card>
                        <Card className="flex justify-start hover:border-2 hover:border-green-800">
                            <CardHeader>
                                <CardDescription className="w-1/2 hover:scale-125 transition">
                                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2F5RQGVYy%2Fproduct-2.jpg&w=256&q=75" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="m-auto text-center w-2/4">
                                <p className="text-xs">Strowberry</p>
                                <p className="font-bold">Grapefruit</p>
                                <span>60 $</span>
                            </CardContent>
                        </Card>
                        <Card className="flex justify-start hover:border-2 hover:border-green-800">
                            <CardHeader>
                                <CardDescription className="w-1/2 hover:scale-125 transition">
                                    <img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FSsDV0wS%2Fproduct-3.jpg&w=256&q=75" />
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="m-auto text-center w-2/4">
                                <p className="text-xs">Meat</p>
                                <p className="font-bold">Economic</p>
                                <span>49 $</span>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <div className="py-32">
                <Carousel className="w-full max-w-4xl mx-auto pt-[80px]">
                    <CarouselContent>
                        {Array.from({ length: 2 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1">
                                    <Card className="flex justify-start border-none px-4 py-10">
                                        <CardHeader>
                                            <CardDescription className="w-full">
                                                <img
                                                    src="https://shofy-grocery-next-js.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fusers%2Fuser-2.jpg&w=256&q=75"
                                                    className="rounded-full"
                                                />
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="m-auto text-start w-full">
                                            <span className="text-green-800">Customer Reviews</span>
                                            <h1 className="text-4xl font-bold py-5">Our Happy Customers</h1>
                                            <p className="font-normal text-lg py-3">
                                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                                                industry's standard dummy text ever since the 1500s,
                                            </p>
                                            <span className="font-bold">Theodore Handle</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
            <div className="flex py-32">
                <div className="w-1/4 ms-16">
                    <Link href="/shop">
                        <img src="https://shofy-grocery-next-js.vercel.app/assets/images/banner/5/best-banner-1.jpg" />
                    </Link>
                </div>
                <div className="grid px-16">
                    <div className="grid">
                        <span className="text-green-800">More to Discover</span>
                        <h1 className="text-4xl">Bestsellers of the week</h1>
                    </div>
                    <div className="flex">
                        <Card className="border-none shadow-none">
                            <CardHeader>
                                <CardTitle><img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FCHNzG2v%2Fproduct-1.jpg&w=384&q=75" className="w-full" /></CardTitle>
                                <CardDescription>Baby Foods</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">Walnut</p>
                                <p className="font-bold">49 $</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-none">
                            <CardHeader>
                                <CardTitle><img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2F5RQGVYy%2Fproduct-2.jpg&w=384&q=75" className="w-full" /></CardTitle>
                                <CardDescription>Fruit</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">Strowberry</p>
                                <p className="font-bold">60 $</p>
                            </CardContent>
                        </Card>
                        <Card className="border-none shadow-none">
                            <CardHeader>
                                <CardTitle><img src="https://shofy-grocery-next-js.vercel.app/_next/image?url=https%3A%2F%2Fi.ibb.co.com%2FSsDV0wS%2Fproduct-3.jpg&w=384&q=75" className="w-full" /></CardTitle>
                                <CardDescription>Vegetable</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold">Broccoli</p>
                                <p className="font-bold">30 $</p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>
            <div className="flex border w-10/12 mx-auto justify-around p-6 mb-10">
                <div className="flex items-center">
                    <LuTruck className="text-green-800 text-xl me-3" />
                    <span>Flexible Delivery</span>
                </div>
                <div className="flex items-center">
                    <LuDollarSign className="text-green-800 text-xl me-3" />
                    <span>Flexible Delivery</span>
                </div>
                <div className="flex items-center">
                    <LuCreditCard className="text-green-800 text-xl me-3" />
                    <span>Flexible Delivery</span>
                </div>
                <div className="flex items-center">
                    <LuHeadphones className="text-green-800 text-xl me-3" />
                    <span>Flexible Delivery</span>
                </div>
            </div>
        </div >
    );
}
